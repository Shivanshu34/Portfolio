import { Briefcase, ArrowRight, ChevronDown, ChevronUp, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const experiences = [
    {
      title: "Web Development Intern",
      company: "GNCIPL Pvt. Ltd.",
      period: "June 2025 – Aug 2025",
      location: "India",
      short:
        "Worked remotely on full-stack NGO donation modules using React, Redux, Node.js, and MongoDB.",
      details: [
        "Engineered full-stack NGO donation modules using React, TailwindCSS, Redux Toolkit, Node.js, and MongoDB.",
        "Implemented secure user authentication, dynamic dashboards, and optimized API performance; reduced backend response time by 25%.",
        "Contributed to scalable and modular frontend architecture using reusable React components and Redux state slices.",
        "Offered a Pre-Placement Offer (PPO) for high-quality contributions and exceptional development performance.",
      ],
    },
    {
      title: "Full Stack Intern & Industrial Training",
      company: "Plasmid (MSME Registered)",
      period: "March 2025 – June 2025",
      location: "India",
      short:
        "Completed industrial training and delivered full-stack apps using React, TailwindCSS, and MongoDB.",
      details: [
        "Converted high-fidelity Figma designs into responsive and accessible UIs using React and TailwindCSS.",
        "Collaborated with design and backend teams to align UI functionality with business requirements.",
        "Completed 2-month industrial training; awarded Internship Certificate and Letter of Recommendation (LOR) for outstanding work.",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen pt-24 px-6 pb-20 bg-gradient-to-br from-gray-950 to-black text-white animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center mb-14">
          <Briefcase className="inline-block w-8 h-8 mb-1 mr-2 animate-pulse text-yellow-400" />
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 shadow-2xl hover:shadow-yellow-500/30 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-1">{exp.title}</h3>
              <p className="text-gray-400 italic">
                {exp.company} • {exp.period} • {exp.location}
              </p>
              <p className="text-gray-300 mt-3">{exp.short}</p>

              {expanded === index && (
                <ul className="mt-4 text-gray-300 space-y-2 pl-2">
                  {exp.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-1 text-yellow-300 underline hover:text-yellow-400 transition text-sm"
                >
                  {expanded === index ? (
                    <>
                      Show Less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Know More <ChevronDown size={16} />
                    </>
                  )}
                </button>

                <button
                  onClick={() => navigate("/certificates")}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg transition text-sm shadow-sm"
                >
                  See Certificate <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
