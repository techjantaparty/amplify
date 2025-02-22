"use client";

import { useState, useEffect } from "react";
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
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        setError("");
        const response = await axios.get<Lawyer[]>("/api/lawyers");
        setLawyers(response.data);
      } catch (err) {
        setError("Could not fetch lawyers");
      }
    };

    fetchLawyers();
  }, []);

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={index} className="text-yellow-500" size={20} />
        ))}
        {halfStar && (
          <Star key="half" className="text-yellow-500 opacity-50" size={20} />
        )}
        <span className="ml-2 text-yellow-500 font-semibold">
          {rating.toFixed(1)}
        </span>
      </>
    );
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-center">
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
          <User className="mr-4 text-yellow-400" size={40} /> Lawyer Dictionary
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover detailed information about top-rated lawyers and find the
          best legal support for your needs.
        </p>
      </div>

      {/* Available Lawyers Section */}
      <div className="container mx-auto p-6">
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 flex items-center bg-indigo-600 p-2 rounded-md">
                <User className="mr-2" />
                {lawyer.name}
              </h2>
              <div className="text-gray-300 mt-3 flex items-center">
                <p className="mr-4">
                  <strong className="bg-purple-600 p-1 rounded-md">
                    Experience:
                  </strong>{" "}
                  {lawyer.experience} years
                </p>
                <p className="flex items-center">
                  <strong className="bg-green-600 p-1 rounded-md">
                    Rating:
                  </strong>
                  <span className="ml-2 flex">
                    {renderRating(
                      parseFloat(lawyer.user_rating.$numberDecimal)
                    )}
                  </span>
                </p>
              </div>
              <p className="mt-4 text-gray-200">
                <strong className="bg-blue-600 p-1 rounded-md">
                  Description:
                </strong>{" "}
                {lawyer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerPage;
