import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    reportedBy: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    upvotes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    downvotes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  { timestamps: true }
);

export const ReportModel =
  mongoose.models.Report || mongoose.model("Report", reportSchema);
