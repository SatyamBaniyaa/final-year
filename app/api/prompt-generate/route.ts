import { NextResponse } from "next/server";
import { openai } from "@/lib/services/openai";
import dbConnect from "@/lib/services/db";
import History from "@/lib/models/history";

export async function POST(req: Request) {
  try {
    const { userId, prompt } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "Login First" },
        { status: 401 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { message: "Prompt is required" },
        { status: 400 }
      );
    }

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:`
You are a senior frontend engineer and code generation agent.

Expertise:
- JavaScript (ES6+)
- HTML5
- CSS3
- TailwindCSS
- Responsive Design
- Component-based architecture

Rules:
- Generate clean, production-ready code.
- Include full working UI (HTML + TailwindCSS + JS if needed).
- Use semantic HTML.
- Keep layout responsive.
- Follow modern best practices.
- Use clean naming conventions.
- No unnecessary comments.
- Keep explanations minimal (2-4 lines max).

Output format:
- Return complete code inside a single block.
- Do not include markdown explanations outside the code.
`,
        },
        { role: "user", content: prompt },
      ],
    });

    const resultText = response.choices[0].message.content;

    // Connect to DB
    await dbConnect();

    // Find existing history
    const previousMessage = await History.findOne({ user_id: userId });

    let history;

    if (previousMessage) {
      // Update existing history
      history = await History.updateOne(
        { user_id: userId },
        {
          $push: {
            messages: { userPrompt: prompt, systemResult: resultText },
          },
          $inc: { limit: 1 },
        }
      );
    } else {
      // Create new history
      history = await History.create({
        user_id: userId,
        messages: [{ userPrompt: prompt, systemResult: resultText }],
        limit: 1,
      });
    }

    return NextResponse.json({ result: resultText, status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error", status: 500 });
  }
}
