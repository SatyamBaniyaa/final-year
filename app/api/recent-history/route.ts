import dbConnect from "@/lib/services/db";
import { NextResponse } from "next/server";
import History from "@/lib/models/history";



export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "Please Login First" },
        { status: 401 }

      );
    }
    await dbConnect();
    // Find user history
    const userHistory = await History.findOne({ user_id: userId });

    if (!userHistory) {
      return NextResponse.json(
        { message: "No history found", messages: [] },
        { status: 200 }
      );
    }
     const recentMessages = userHistory.messages.slice(-10);

    return NextResponse.json({
      userId,
      messages: recentMessages,
      limit: userHistory.limit,
      status: 200,
    });
  }
  catch (error) {
    console.error("recentHistory error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
