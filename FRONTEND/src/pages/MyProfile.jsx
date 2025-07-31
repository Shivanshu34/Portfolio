import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaChess } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodeforces } from "react-icons/si";

const MyProfile = () => {
  const resumeUrl = "https://res.cloudinary.com/dxhyznlyz/raw/upload/v1753892437/secure-files/ea2owmymb7w7mwjvrhom";

  const hostedProjects = [
    { name: "Wanderlust - Travelling Website", link: "https://wanderlust-wejn.onrender.com/listings" },
    { name: "NGO Donation Portal", link: "https://full-stack-ngo-charity.netlify.app/" },
  ];

  const masteredSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
    "MongoDB", "TailwindCSS", "Java", "Data Structures & Algorithms",
    "DP", "Graph", "OOPS", "DBMS", "JWT", "Passport", "REST APIs", "Git",
    "Redux Toolkit","VS Code","Cloudinary","Socket.IO", "SMTP", "Nodemailer",
    "Sessions-Cookies"
  ];

  const hobbies = ["Playing Chess", "Coding", "Reading"];

  const SocialLink = ({ icon, label, href, text }) => (
    <div className="flex items-center gap-2">
      {icon}
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {text}
      </a>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-10 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">My Profile</h2>

      <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image + Open to Work */}
        <div className="flex flex-col items-center md:col-span-1">
          <img
            src="https://res.cloudinary.com/dxhyznlyz/image/upload/v1753942348/Me_sfo2y9.jpg"
            alt="My Avatar"
            className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-yellow-400"
          />
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-medium">Open to Work:</span>{" "}
            <span className="text-green-600 font-semibold">Yes</span>
          </p>
        </div>

        {/* Profile Details */}
        <div className="md:col-span-2 space-y-5">
          <div>
            <label className="block text-gray-600 font-medium">Full Name</label>
            <p className="bg-gray-100 px-3 py-2 rounded">Shivanshu Kumar Gupta</p>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Current Education</label>
            <p className="bg-gray-100 px-3 py-2 rounded">B.Tech in Information Technology, Dr.AITH Kanpur</p>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <p className="bg-gray-100 px-3 py-2 rounded">shivanshukumargupta6969@gmail.com</p>
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Resume</label>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow"
            >
              Download Resume
            </a>
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Experience</label>
            <ul className="list-disc list-inside bg-gray-100 px-3 py-2 rounded space-y-1">
              <li>Web Development Intern @ GNCIPL Pvt. Ltd. (June 2025 – Aug 2025)</li>
              <li>Intern @ Plasmid (MSME) (March 2025 – June 2025)</li>
            </ul>
          </div>

          {/* Mastered Skills */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">Mastered Skills</label>
            <div className="flex flex-wrap gap-2 bg-gray-100 p-3 rounded">
              {masteredSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-yellow-200 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <label className="block text-gray-600 font-medium">Hosted Projects</label>
            <ul className="list-disc list-inside bg-gray-100 px-3 py-2 rounded space-y-1">
              {hostedProjects.map((proj) => (
                <li key={proj.name}>
                  <a
                    href={proj.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <label className="block text-gray-600 font-medium">Social Profiles</label>
            <SocialLink
              icon={<FaGithub className="text-black" />}
              label="GitHub"
              href="https://github.com/Shivanshu34"
              text="GitHub"
            />
            <SocialLink
              icon={<FaLinkedin className="text-blue-700" />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/shivanshu-kumar-gupta-454537334/"
              text="Linkdin"
            />
            <SocialLink
              icon={<FaEnvelope className="text-red-600" />}
              label="Email"
              href="mailto:shivanshukumargupta6969@gmail.com"
              text="Gmail"
            />
            <SocialLink
              icon={<SiGeeksforgeeks className="text-green-700" />}
              label="GFG"
              href="https://auth.geeksforgeeks.org/user/shivanshukummpfe/practice/"
              text="geeksforgeeks"
            />
            <SocialLink
              icon={<SiCodeforces className="text-purple-600" />}
              label="Codeforces"
              href="https://codeforces.com/profile/Shivanshu_55"
              text="Codeforces"
            />
          </div>

          {/* Hobbies */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Hobbies</label>
            <div className="flex items-center flex-wrap gap-3 bg-gray-100 p-3 rounded">
              {hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow"
                >
                  <FaChess className="text-blue-600" />
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
