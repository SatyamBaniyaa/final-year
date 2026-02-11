
import dbConnect from "@/lib/services/db"
import { NextResponse } from 'next/server'
import User   from "@/lib/models/users"

export async function POST(req: Request) {
 const data = await req.body;
         await dbConnect
        console.log('request', data)
        User.insertOne({email: '', password: ''})
        .then((datas) => {
              return NextResponse.json({ data: datas }, { status: 201 })
        })
        .catch(err => {
            console.log('erere', err)
            return NextResponse.json({ error: err }, { status: 500 })
        })







    }

export async function GET(req: Request) {

    try {
        // console.log('req', req)
        //  const mydb =  dbConnect()
        //  mydb.then((res) => {
        //     console.log('connected', res)
        //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        //  })
        //  .catch((err) => {
        //     return NextResponse.json({ error: err }, { status: 500 })
        //  })



    } catch(err) {
        console.log(err)
    }

}
