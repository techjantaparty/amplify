"use client";

import { User, Star, BookOpen, Landmark, Scale } from "lucide-react"; // Icons

const LawyerPostShowcase = () => {
  // Dummy Hardcoded Posts Data
  const posts = [
    {
      name: "Adv. Rajesh Sharma",
      title: "Understanding Article 21 - Right to Life",
      content:
        "Article 21 of the Indian Constitution guarantees the right to life and personal liberty. The Supreme Court has expanded its scope over time, including the right to privacy, clean environment, and even the right to die with dignity. This provision has played a crucial role in landmark cases such as Maneka Gandhi vs. Union of India and K.S. Puttaswamy vs. Union of India.",
      genre: "Constitution Facts",
    },
    {
      name: "Adv. Priya Mehta",
      title: "Important Learnings from Criminal Law",
      content:
        "Criminal law focuses on offenses against the state and public order. It includes principles like 'presumption of innocence', burden of proof, and the concept of 'mens rea'. Key IPC sections like 302 (murder) and 375 (rape) define severe offenses and their punishments.",
      genre: "Law Learnings",
    },
    {
      name: "Adv. Aniket Roy",
      title: "Case Study: Vishakha vs. State of Rajasthan",
      content:
        "This landmark case laid the foundation for workplace sexual harassment laws in India. The Supreme Court established the Vishakha Guidelines, which later evolved into the POSH Act, ensuring a safer work environment for women.",
      genre: "Case Analysis",
    },
  ];

  return (
    <div className="max-w-4xl w-full mx-auto space-y-6">
      {posts.map((post, index) => {
        let genreIcon;

        if (post.genre === "Constitution Facts") {
          genreIcon = <Landmark className="inline-block mr-2" size={18} />;
        } else if (post.genre === "Law Learnings") {
          genreIcon = <BookOpen className="inline-block mr-2" size={18} />;
        } else if (post.genre === "Case Analysis") {
          genreIcon = <Scale className="inline-block mr-2" size={18} />;
        }

        return (
          <div
            key={index}
            className="w-full bg-black text-white p-6 rounded-xl shadow-xl border border-[#C0C0C0]"
          >
            {/* Lawyer Info */}
            <div className="flex items-center mb-4">
              <div className="bg-[#C0C0C0] p-2 rounded-full text-black">
                <User size={24} />
              </div>
              <div className="ml-3 flex items-center">
                <h3 className="text-lg font-semibold">{post.name}</h3>
                <Star className="text-[#C0C0C0] ml-2" size={18} />
              </div>
            </div>

            {/* Post Content */}
            <h2 className="text-xl font-bold bg-[#C0C0C0] text-black px-4 py-2 rounded-lg shadow-md border border-gray-700">
              {post.title}
            </h2>
            <p className="text-gray-300 text-sm bg-gray-800 p-3 mt-3 rounded-lg border border-gray-700">
              {post.content}
            </p>

            {/* Genre Tag */}
            <div className="mt-3 inline-block px-4 py-1 text-sm font-medium bg-gray-900 text-[#C0C0C0] rounded-full border border-gray-700">
              {genreIcon} {post.genre}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LawyerPostShowcase;
