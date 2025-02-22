import { ReportModel } from "@/models/Report";
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  await connectDB();

  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/")[4];
    const { userAddress } = await req.json();
    // check if like already exists

    const existingDislike = await ReportModel.findOne({
      _id: id,
      downvotes: userAddress,
    });

    if (existingDislike) {
      await ReportModel.findByIdAndUpdate(id, {
        $pull: { downvotes: userAddress },
      });
    } else {
      await ReportModel.updateOne(
        { _id: id },
        {
          $push: { downvotes: userAddress },
        }
      );
    }

    await ReportModel.findByIdAndUpdate(id, {
      $pull: { upvotes: userAddress },
    });

    return NextResponse.json(
      { message: "Downvote successful", success: true },
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
