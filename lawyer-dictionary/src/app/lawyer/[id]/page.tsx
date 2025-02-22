"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { User, Star } from "lucide-react"; // Importing icons
import Lawyer from "./../../../lib/Lawyer.schema";

interface Lawyer {
  name: string;
  experience: number;
  description: string;
  user_rating: {
    $numberDecimal: string;
  };
}

const LawyerPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [error, setError] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchLawyer(id as string);
    }
  }, [id]);

  const fetchLawyer = async (lawyerId: string) => {
    try {
      setError("");
      const response = await axios.get(`/api/lawyer?id=${lawyerId}`);
      setLawyer(response.data.lawyer);
    } catch (err) {
      setLawyer(null);
      setError("Lawyer not found");
    }
  };

  const handleSearch = () => {
    if (searchId) {
      router.push(`/lawyer/${searchId}`);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <User className="mr-2 text-indigo-600" /> Lawyer Details
      </h1>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {lawyer && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <User className="mr-2 text-indigo-600" />
            {lawyer.name}
          </h2>
          <div className="text-gray-600 mt-3 flex items-center">
            <p className="mr-4">
              <strong>Experience:</strong> {lawyer.experience} years
            </p>
            <p className="flex items-center">
              <strong>Rating:</strong>
              <span className="ml-2 text-yellow-500">
                <Star size={20} />
                {lawyer.user_rating.$numberDecimal}
              </span>
            </p>
          </div>
          <p className="mt-4 text-gray-700">
            <strong>Description:</strong> {lawyer.description}
          </p>
        </div>
      )}
      <div className="mt-6">
        <input
          type="text"
          className="p-2 w-full md:w-1/3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search for another lawyer"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="mt-3 w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default LawyerPage;
