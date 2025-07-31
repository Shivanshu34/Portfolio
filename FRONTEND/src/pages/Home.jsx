import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

// Cloudinary profile image
const profileImage =
  "https://res.cloudinary.com/dxhyznlyz/image/upload/v1753942348/Me_sfo2y9.jpg";

export default function Home() {
  return (
    <section className="min-h-screen pt-24 px-6 flex flex-col items-center bg-gradient-to-br from-[#0d0d0d] via-[#111] to-black text-white">
      {/* Profile Image */}
      <div className="relative group">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-xl object-cover transform group-hover:scale-105 transition duration-300"
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
      </div>

      {/* Name & Title */}
      <div className="text-center mt-6 max-w-3xl animate-fade-in-up">
       <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 mb-2 flex items-center justify-center gap-2">
          Shivanshu Kumar Gupta
          <Link to="/MyProfile">
          <HiArrowTopRightOnSquare className="w-8 h-8 mt-2 text-gray-300" />
          </Link>
      </h1>

        <p className="text-lg text-gray-300 font-medium mb-4">
          Full Stack Developer | DSA Enthusiast | Open Source Contributor
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a
            href="https://github.com/Shivanshu34"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivanshu-kumar-gupta-454537334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition"
          >
            <FaLinkedin className="text-blue-600" />
          </a>
          <a
            href="mailto:shivanshukumargupta6969@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition"
          >
            <FaEnvelope className="text-red-500" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/shivanshukummpfe/practice/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
            className="hover:scale-110 transition"
          >
            <SiGeeksforgeeks className="text-green-600" />
          </a>
          <a
            href="https://codeforces.com/profile/Shivanshu_55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
            className="hover:scale-110 transition"
          >
            <SiCodeforces className="text-purple-500" />
          </a>
        </div>

        {/* About Summary */}
        <p className="text-md text-gray-400 mb-4">
          I’m passionate about solving real-world problems through tech. With 20+ full-stack projects and consistent performance in DSA, this portfolio represents my journey across development, internships, and achievements.
        </p>

        {/* Resume Highlights */}
        <div className="bg-[#1a1a1a] bg-opacity-70 rounded-xl shadow-lg px-6 py-6 text-left text-sm md:text-base text-gray-300 mb-6 backdrop-blur-sm w-full md:w-[700px] border border-gray-700">
          <ul className="space-y-3">
            <li>
              <span className="text-yellow-400 font-semibold">📌 Experience:</span>{" "}
              Built scalable apps during internships at GNCIPL & Plasmid (MSME).
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">📜 Certificates:</span>{" "}
              6+ verifiable credentials + Letter of Recommendation.
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">🛠️ Skills:</span>{" "}
              MERN Stack, TailwindCSS, DSA With Java (DP, graphs, etc.), Socket.io, REST APIs, JWT.
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">🎓 Education:</span>{" "}
              B.Tech in IT with strong grip on DSA, MERN stack.
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">🏆 Achievements:</span>{" "}
              GeeksforGeeks Top <u>1000</u> ranker, contest finalist.
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">📫 Contact:</span>{" "}
              Open to freelance, internships & collaborations.
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/experience"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition duration-300"
          >
            Explore My Work
          </Link>
          <Link
            to="/certificates"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            See Certificates
          </Link>
          <a
            href="https://github.com/Shivanshu34"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-pink-400 text-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-black transition duration-300"
          >
            View GitHub
          </a>
          <a
            href="https://res.cloudinary.com/dxhyznlyz/raw/upload/v1753892437/secure-files/ea2owmymb7w7mwjvrhom"
            download="Shivanshu_Kumar_Gupta_Resume.pdf"
            className="px-6 py-3 border border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
