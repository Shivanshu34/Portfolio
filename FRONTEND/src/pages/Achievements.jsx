// src/pages/Achievements.jsx
import { Trophy, Github, FileText, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Achievements() {
  const achievements = [
    "Solved 400+ DSA problems (350+ on GFG, 50+ on LeetCode); Rank < 1000 in GFG contest; Peak rating: 1740",
    "Ranked in the Top 1% (Rank < 1000) in a national-level GeeksforGeeks coding contest",
    "Achieved a peak GFG rating of 1740, placing in the Top 2% of competitive programmers",
    "Built and published 20+ full-stack projects on GitHub using REST APIs, auth, and real-time messaging",
    "Independently developed a real-time Chatting Web App using React, Node.js, Express, MongoDB, and Socket.io",
    "Qualified the GATE 2025 exam, showcasing strong CS fundamentals",
    "Maintained a daily DSA streak for over 120 days on GeeksforGeeks while managing academics",
    "Appreciated by faculty for technical event designs and campus contribution",
  ];

  return (
    <section className="min-h-screen pt-24 px-6 pb-20 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-12 text-center drop-shadow-lg">
          <Trophy className="inline-block w-8 h-8 mb-2 mr-2 animate-pulse" />
          My Achievements
        </h2>

        <ul className="space-y-6 text-lg text-gray-300 sm:text-xl font-medium">
          {achievements.map((item, index) => (
            <li
              key={index}
              className="border border-gray-700 rounded-xl px-5 py-4 hover:shadow-yellow transition duration-300 shadow-md hover:shadow-yellow-500/20"
            >
              <span className="text-yellow-300 font-semibold mr-2">
                <Sparkles className="inline w-5 h-5 mr-1 -mt-1" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            <FileText className="w-5 h-5" />
            View Certificates
          </Link>

          <a
            href="https://github.com/Shivanshu34"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <Github className="w-5 h-5" />
            Explore GitHub Projects
          </a>

          <a
            href="https://www.geeksforgeeks.org/user/shivanshukummpfe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          >
            <BookOpen className="w-5 h-5" />
            Visit GFG Profile
          </a>
        </div>
      </div>
    </section>
  );
}
