// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-black text-white shadow-inner py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base mb-1">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">My Portfolio</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Built with <span className="text-pink-500">❤</span> using React and TailwindCSS
        </p>
      </div>
    </footer>
  );
}
