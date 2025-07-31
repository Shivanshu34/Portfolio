import { Code2, TerminalSquare, Database, Settings2, Lightbulb } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: "Java, C, C++, Python, JavaScript",
      icon: <TerminalSquare className="text-yellow-300 w-6 h-6 mr-2" />,
    },
    {
      title: "Web Development",
      skills: "HTML, CSS, Node.js, Express, React, Bootstrap, TailwindCSS",
      icon: <Code2 className="text-yellow-300 w-6 h-6 mr-2" />,
    },
    {
      title: "Databases",
      skills: "MySQL, MongoDB",
      icon: <Database className="text-yellow-300 w-6 h-6 mr-2" />,
    },
    {
      title: "Tools & Utilities",
      skills: "Git, VS Code, Jest, Terminal",
      icon: <Settings2 className="text-yellow-300 w-6 h-6 mr-2" />,
    },
    {
      title: "Core CS Concepts",
      skills: "DSA, OOP, Graphs, Trees, Tries, DP, Segment Trees, Sorting, etc.",
      icon: <Lightbulb className="text-yellow-300 w-6 h-6 mr-2" />,
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-6 pb-20 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          <Code2 className="inline-block mb-2 mr-2 animate-pulse" />
          Technical Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex items-center mb-3">
                {category.icon}
                <h3 className="text-xl font-semibold text-yellow-300 group-hover:text-yellow-400 transition">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition">
                {category.skills}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-gray-400">
          Continuously expanding my skillset through projects, internships, and competitive programming.
        </div>
      </div>
    </section>
  );
}
