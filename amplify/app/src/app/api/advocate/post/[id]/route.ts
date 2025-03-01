import LawyerPost from "@/models/LawyerPost";
import { connectDB } from "@/utils/dbTest";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const url = new URL(req.url);

    const lawyerId = url.pathname.split("/").pop();

    if (!lawyerId) throw new Error("Lawyer ID not found");

    const lawyerPosts = await LawyerPost.aggregate([
      {
        $match: {
          lawyer: new Types.ObjectId(lawyerId),
        },
      },
      {
        $lookup: {
          from: "lawyers", // The name of the Lawyer collection
          localField: "lawyer", // The field in LawyerPost that stores the lawyer's ID
          foreignField: "_id", // The field in Lawyer that matches the ID
          as: "lawyerDetails",
        },
      },
      {
        $unwind: "$lawyerDetails", // Convert lawyerDetails array to an object (optional)
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);

    console.log(lawyerPosts);

    return NextResponse.json(
      { message: "Posts fetched successfully", lawyerPosts, success: true },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Internal Server Error", success: false },
        { status: 500 }
      );
    }
  }
}
