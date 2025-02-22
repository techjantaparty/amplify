import ReportDetailsComponent from "@/components/Report";
import { ReportModel } from "@/models/Report";
import Image from "next/image";
import React from "react";

export interface Report {
  _id: string;
  reportedBy: string;
  description: string;
  image: string;
  name: string;
  upvotes: string[];
  downvotes: string[];
}

async function getReportById(id: string) {
  const report = await ReportModel.findById(id);
  if (!report) return null;
  return report as Report;
}

const ReportDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const report = await getReportById(id);

  if (!report) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-[#151515] via-[#292929] to-[#151515]">
        <p className="text-white font-bold text-2xl">No report found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#151515] via-[#292929] to-[#151515] py-6 px-8">
      <div className="mt-12 justify-between gap-6 max-w-7xl mx-auto items-start flex">
        <ReportDetailsComponent report={report} />
        <div className="overflow-hidden">
          <Image
            className="w-full h-full"
            src={report.image}
            alt="Report Image"
            width={360}
            height={360}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
