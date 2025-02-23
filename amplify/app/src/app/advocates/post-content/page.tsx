import LawyerPostCard from "@/components/advocatePostCard";
import PostContentForm from "@/components/createAdvocatePost";
import React from "react";

const AdvocatesDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#C0C0C0] flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-gray-950 text-white p-8 rounded-xl shadow-2xl border border-[#C0C0C0]">
        {/* <PostContentForm /> */}
        <h1 className="text-3xl font-bold text-center mb-6 bg-[#C0C0C0] text-black px-6 py-3 rounded-lg shadow-md border border-gray-700">
          Advocates Dashboard
        </h1>
        <PostContentForm />
        <LawyerPostCard />
      </div>
    </div>
  );
};

export default AdvocatesDashboard;
