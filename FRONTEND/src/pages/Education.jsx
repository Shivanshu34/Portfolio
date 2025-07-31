import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Dr. Ambedkar Institute of Technology for Handicapped, Kanpur",
      duration: "2022 – 2026",
      degree: "B.Tech in Information Technology",
      result: "SGPA: 8.77/10",
      highlight: "Top 10% of batch",
      location: "Kanpur, Uttar Pradesh",
    },
    {
      institution: "Sri N.L.K V.M. Inter College, Kanpur",
      duration: "2020 – 2021",
      degree: "Intermediate (Science)",
      result: "87.5%",
      highlight: "Top 5% in class",
      location: "Kanpur, Uttar Pradesh",
    },
    {
      institution: "Sri N.L.K V.M. Inter College, Kanpur",
      duration: "2018 – 2019",
      degree: "Secondary Education",
      result: "88.8%",
      highlight: null,
      location: "Kanpur, Uttar Pradesh",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-14 text-center">
          <GraduationCap className="inline-block mr-2 mb-1" />
          Education
        </h2>

        <ol className="relative border-l border-yellow-400 ml-4">
          {education.map((edu, index) => (
            <li key={index} className="mb-10 ml-6 group">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-8 ring-gray-900">
                <GraduationCap className="w-3.5 h-3.5 text-black" />
              </span>
              <div className="border border-gray-700 rounded-xl p-5 shadow-md group-hover:shadow-yellow-500/20 transition duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-yellow-300">{edu.institution}</h3>
                  <span className="text-sm text-gray-400">{edu.duration}</span>
                </div>
                <p className="text-gray-200 mb-1">{edu.degree}</p>
                <p className="text-sm text-gray-400">
                  Scored: <span className="font-semibold text-white">{edu.result}</span>
                </p>
                {edu.highlight && (
                  <span className="inline-block mt-2 text-xs font-medium bg-yellow-500 text-black px-3 py-1 rounded-full">
                    {edu.highlight}
                  </span>
                )}
                <p className="mt-2 text-gray-500 text-sm">{edu.location}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
