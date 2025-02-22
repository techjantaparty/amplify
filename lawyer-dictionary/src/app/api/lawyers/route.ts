import { connectDB } from "@/lib/db";
import Lawyer from "@/lib/Lawyer.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    // Fetch all lawyers from the database
    const lawyers = await Lawyer.find();

    // If no lawyers are found, return an appropriate message
    if (!lawyers || lawyers.length === 0) {
      return NextResponse.json(
        { message: "No lawyers found" },
        { status: 404 }
      );
    }

    return NextResponse.json(lawyers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}
