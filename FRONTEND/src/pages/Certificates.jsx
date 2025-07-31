import { FileText, Sparkles } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Web Development Internship – Plasmid",
      url: "https://res.cloudinary.com/dxhyznlyz/raw/upload/v1753892647/secure-files/ica0rkikewlszmfmaldr",
    },
    {
      title: "Letter of Recommendation – Plasmid",
      url: "https://res.cloudinary.com/dxhyznlyz/raw/upload/v1753892568/secure-files/lhrxcaulenrhohyokom6",
    },
    {
      title: "Offer Letter – GNCIPL",
      url: "https://res.cloudinary.com/dxhyznlyz/raw/upload/v1753892492/secure-files/pmnl4utroj88ehzbqc8j",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-br from-gray-950 to-black text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-yellow-400 tracking-tight animate-fade-in">
            <FileText className="inline-block mr-3 mb-2 text-yellow-300 animate-pulse" />
            Certificates
          </h2>
          <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
            Verified and official documentation of my internships, offers, and performance.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-6 bg-gradient-to-tr from-gray-800/70 to-gray-900/80 rounded-2xl border border-gray-700 hover:border-yellow-400 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500/10 rounded-full p-2">
                  <FileText className="text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300">
                    Click to view or download
                  </p>
                </div>
              </div>

              {/* Decorative Spark Effect */}
              <div className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-5 h-5 animate-ping" />
              </div>
            </a>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-20 bg-gray-900/80 border border-gray-700 rounded-xl p-6 text-center shadow-inner shadow-yellow-500/5">
          <Sparkles className="mx-auto mb-3 text-yellow-300 animate-pulse" />
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">
            Verified Credentials
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Each of the above certifications reflects my commitment to continuous learning
            and real-world development. These experiences, particularly internships and
            recommendation letters, shaped my confidence in full-stack development and
            solidified my journey as a developer. Feel free to explore them!
          </p>
        </div>
      </div>
    </section>
  );
}
