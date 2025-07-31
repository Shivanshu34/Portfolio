import { useState } from "react";
import { ExternalLink, Github, Globe, ChevronDown, ChevronUp, Info } from "lucide-react";

const ProjectCard = ({ title, tech, shortInfo, longInfo, links }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 shadow-2xl hover:shadow-yellow-500/30 transition duration-300 text-white w-full">
      <h2 className="text-2xl font-bold text-yellow-300 mb-1 transition duration-300 transform hover:scale-105 hover:text-yellow-400">
        {title}
      </h2>
      <p className="text-sm text-gray-400 font-medium mb-3">{tech}</p>
      <p className="text-gray-300 mb-2">{shortInfo}</p>

      {showMore && (
        <div className="text-gray-400 text-sm whitespace-pre-wrap mt-2 space-y-2">
          {longInfo.split("\n").map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <Info className="w-4 h-4 text-yellow-400 mt-1" />
              <span>{point.replace(/^•\s*/, "")}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-5">
        {links?.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-1.5 rounded-full transition"
          >
            <Globe className="w-4 h-4" /> Live Demo
          </a>
        )}
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition"
          >
            <Github className="w-4 h-4" /> GitHub Repo
          </a>
        )}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-1 mt-4 text-yellow-400 hover:text-yellow-300 text-sm font-semibold underline transition"
      >
        {showMore ? (
          <>
            Show Less <ChevronUp size={14} />
          </>
        ) : (
          <>
            More Info <ChevronDown size={14} />
          </>
        )}
      </button>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Whispr: Real-Time Chatting Web App",
      tech: "MERN, Socket.IO, Tailwind, Cloudinary, Render",
      shortInfo:
        "Scalable chat platform with real-time messaging and responsive UI for 100+ users.",
      longInfo: `• Developed a scalable chat platform enabling real-time messaging and user status updates for 100+ active users using Socket.IO and the MERN stack.
• Crafted a responsive interface with React, Tailwind CSS, and normalize.css, increasing engagement by 35%.
• Backend built with Express.js, MongoDB, RESTful APIs (MVC structure) reducing API latency by 22%.
• Integrated session management with Passport.js, cookie-based authentication, Flash messages.`,
      links: {
        github: "https://github.com/Shivanshu34/Whispr",
      }
    },
    {
      title: "Wanderlust: Full-Stack Web Application",
      tech: "Express.js, EJS, MongoDB, Bootstrap, Hopscotch, Render",
      shortInfo:
        "Airbnb-inspired rental platform with CRUD, authentication, and guided onboarding.",
      longInfo: `• Launched a property rental platform supporting CRUD listings and bookings.
• Built reusable EJS templates with Bootstrap to create a mobile-first UI.
• Secure RESTful APIs handling 500+ DB transactions/week with data integrity.
• Onboarding via Hopscotch.js guided tours, Joi-based validations, robust error handling.
• Deployed with CI on Render (99.5% uptime).`,
      links: {
        github: "https://github.com/Shivanshu34/Wanderlust",
        demo: "https://wanderlust-wejn.onrender.com/listings"
      }
    },
    {
      title: "NGO Donation Web App",
      tech: "React, TailwindCSS, Express, MongoDB, Redux Toolkit, JWT, Nodemailer",
      shortInfo:
        "Built during internship to support public/anonymous donations with admin dashboard.",
      longInfo: `• Developed solo at GNCIPL during internship.
• Allows secure donations by category with responsive UI.
• Frontend on Netlify, backend on Vercel. JWT, cookies, email confirmations.
• GitHub: https://lnkd.in/eQxU9vz4 | Demo: https://lnkd.in/eCtHbWJ5`,
      links: {
        github: "https://github.com/Shivanshu34/Charity-Donor",
        demo: "https://full-stack-ngo-charity.netlify.app/"
      }
    },
    {
      title: "Leave Application Portal",
      tech: "React, Node.js, Express, MongoDB, JWT, Styled-Components",
      shortInfo:
        "Full-stack leave management system with admin/user roles and real-time tracking.",
      longInfo: `• Employees apply for leave, track statuses.
• Admins approve/reject in one-click interface.
• Transparent HR flow using JWT + role-based access.
• GitHub: https://lnkd.in/euDPMKEM`,
      links: {
        github: "https://github.com/Shivanshu34/Leave-Application-Portal"
      }
    },
    {
      title: "SecureFileShare: Secure File Sharing App",
      tech: "MERN, Cloudinary, JWT, Styled-Components",
      shortInfo:
        "Full-stack app to upload/share/manage files securely with dynamic dashboard.",
      longInfo: `• Secure uploads with file type validation, Cloudinary storage.
• Personalized dashboard with charts: usage, activity, file types.
• Dark/light theme, download/delete actions, and JWT auth with blacklist.
• Built for scalability and clean UX.`,
      links: {
        github: "https://github.com/Shivanshu34/File-Storing",
      }
    },
    {
      title: "Live Sports Scoreboard",
      tech: "React, Node.js, Express, Free Sports APIs",
      shortInfo:
        "Real-time cricket/football scoreboard using APIs, responsive UI, and backend integration.",
      longInfo: `• Displays live match scores, highlights, and error-handled real-time updates.
• Uses Axios + Flexbox + environment-secured APIs.
• GitHub: https://lnkd.in/eFRs_7iQ`,
      links: {
        github: "https://github.com/Shivanshu34/Live-Score"
      }
    }
  ];

  return (
    <section className="min-h-screen pt-24 px-4 pb-20 bg-gradient-to-br from-gray-950 to-black text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center mb-14 drop-shadow-md">
          Projects Showcase
        </h1>

        <div className="flex flex-col gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Shivanshu34"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            See More Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
