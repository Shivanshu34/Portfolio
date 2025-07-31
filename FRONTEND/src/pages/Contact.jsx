// src/pages/Contact.jsx
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen pt-24 px-4 pb-20 bg-gradient-to-br from-gray-950 to-black text-white font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center mb-14">
          <Mail className="inline-block w-8 h-8 mb-1 mr-2 animate-bounce text-yellow-400" />
          Let's Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Email */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-yellow-500/20 transition-shadow duration-300">
            <div className="flex items-center mb-4 space-x-3">
              <Mail className="text-yellow-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p className="text-gray-300 mb-2">shivanshukumargupta6969@gmail.com</p>
            <a
              href="mailto:shivanshukumargupta6969@gmail.com"
              className="text-blue-400 hover:text-yellow-300 underline transition-colors duration-200"
            >
              Send Email →
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
            <div className="flex items-center mb-4 space-x-3">
              <Linkedin className="text-yellow-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
            </div>
            <p className="text-gray-300 mb-2">shivanshu-kumar-gupta</p>
            <a
              href="https://www.linkedin.com/in/shivanshu-kumar-gupta-454537334/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-yellow-300 underline transition-colors duration-200"
            >
              View Profile →
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
            <div className="flex items-center mb-4 space-x-3">
              <Github className="text-yellow-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">GitHub</h3>
            </div>
            <p className="text-gray-300 mb-2">Shivanshu-01</p>
            <a
              href="https://github.com/Shivanshu34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-yellow-300 underline transition-colors duration-200"
            >
              Explore Projects →
            </a>
          </div>

          {/* GeeksforGeeks */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-green-500/20 transition-shadow duration-300">
            <div className="flex items-center mb-4 space-x-3">
              <BookOpen className="text-yellow-400 w-6 h-6" />
              <h3 className="text-xl font-semibold">GeeksforGeeks</h3>
            </div>
            <p className="text-gray-300 mb-2">shivanshukummpfe</p>
            <a
              href="https://auth.geeksforgeeks.org/user/shivanshukummpfe/practice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-yellow-300 underline transition-colors duration-200"
            >
              View GFG Profile →
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Shivanshu34"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://auth.geeksforgeeks.org/user/shivanshukummpfe/practice/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            <BookOpen className="w-5 h-5" />
            GFG Profile
          </a>
        </div>
      </div>
    </section>
  );
}
