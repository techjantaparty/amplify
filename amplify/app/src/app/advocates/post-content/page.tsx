import LawyerPostCard from "@/components/advocatePostCard";
import PostContentForm from "@/components/createAdvocatePost";
import React from "react";

const AdvocatesDashboard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#C0C0C0] flex gap-4 justify-center p-6">
      <LawyerPostCard />
      <div className="w-full max-w-2xl text-white p-8 rounded-xl">
        <PostContentForm />
      </div>
    </div>
  );
};

export default AdvocatesDashboard;
