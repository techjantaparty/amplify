/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import PostItem from "./PostItem";
import { LoaderIcon } from "react-hot-toast";
import { Report } from "@/app/(protected)/report/[id]/page";
import { useQuery } from "@tanstack/react-query";

const AllPosts = () => {
  const { isLoading, data: reports } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axios.get(`/api/report`);

      return res.data.reports as Report[];
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading)
    return (
      <div className="col-span-2 w-full">
        <LoaderIcon className="size-8 text-white" />
      </div>
    );

  if (!reports || reports.length === 0) {
    return (
      <div className="col-span-2 w-full">
        <p className="text-white font-bold text-2xl">No reports found</p>
      </div>
    );
  }

  return (
    reports.length !== 0 && (
      <div className="col-span-2 w-full">
        <div className="flex gap-4 flex-wrap">
          {reports?.map((report) => {
            return <PostItem report={report} key={report._id} />;
          })}
        </div>
      </div>
    )
  );
};

export default AllPosts;
