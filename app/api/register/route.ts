
import dbConnect from "@/lib/services/db"
import { NextResponse } from 'next/server'
import User  from "@/lib/models/users"
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

        const data = await req.json();
        await dbConnect();

        console.log('request', data);
        const { name, email, password } = data

        if(!name || !email || !password) {
          return NextResponse.json({
            message: 'Missing required fields',
            status: 400
          })
        }

        const existingUser = await User.findOne({email})

        if(existingUser) {
          return NextResponse.json({
            message: 'User already exits',
            status: 400
          })
        }

       const hashPassword = await bcrypt.hash(password, 10);

       try {
         const registeredUser =  await User.create({
          name,
          email,
          password: hashPassword
        })

        return NextResponse.json({
          message: registeredUser?._id,
          status: 201
        })
       } catch(error) {
        return NextResponse.json({
          error: error,
          status: 500
        })
       }
    }

