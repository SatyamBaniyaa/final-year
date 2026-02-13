import dbConnect from "@/lib/services/db"
import { NextResponse } from 'next/server'
import User  from "@/lib/models/users"

export async function GET(req: Request) {
  try {
    await dbConnect()
    const users = await User.find();
    return NextResponse.json({
      message: 'Success',
      user: users,
      status: 200
    })
  } catch(error) {
    return NextResponse.json({
      message: 'Error ',
      status: 500
    })
  }
}
