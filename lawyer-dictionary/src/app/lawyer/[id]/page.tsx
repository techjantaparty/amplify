"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { User, Star } from "lucide-react"; // Importing icons

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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto p-8 bg-gray-950 rounded-xl shadow-xl w-full max-w-4xl border border-gray-800">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold flex justify-center items-center mb-6 bg-indigo-700 px-6 py-3 rounded-lg shadow-md">
            <User className="mr-2 text-white" size={30} /> Lawyer Details
          </h1>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {lawyer ? (
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-3xl font-semibold flex justify-center items-center mb-6 bg-purple-700 px-6 py-3 rounded-lg shadow-md">
              <User className="mr-2 text-white" size={28} />
              {lawyer.name}
            </h2>

            <div className="text-gray-300 mt-3 flex justify-between items-center bg-blue-700 px-6 py-3 rounded-lg shadow-md mb-4">
              <p>
                <strong>Experience:</strong> {lawyer.experience} years
              </p>
              <p className="flex items-center">
                <strong>Rating:</strong>
                <span className="ml-2 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className={
                        i <
                        Math.round(Number(lawyer.user_rating.$numberDecimal))
                          ? "text-yellow-500"
                          : "text-gray-500"
                      }
                    />
                  ))}
                  <span className="ml-2 text-yellow-400 text-lg font-bold">
                    {lawyer.user_rating.$numberDecimal}
                  </span>
                </span>
              </p>
            </div>

            <p className="mt-4 text-gray-200 bg-green-700 px-6 py-3 rounded-lg shadow-md">
              <strong>Description:</strong> {lawyer.description}
            </p>
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-400">
            <p>No lawyer found, please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyerPage;
