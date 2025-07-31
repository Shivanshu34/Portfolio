import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const profileImage =
  "https://res.cloudinary.com/dxhyznlyz/image/upload/v1753942348/Me_sfo2y9.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAvatarMenu = () => setAvatarMenuOpen(!avatarMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/skills", label: "Skills" },
    { to: "/education", label: "Education" },
    { to: "/achievements", label: "Achievements" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClass =
    "relative text-white font-medium hover:text-yellow-400 transition duration-300 px-3 py-1";

  return (
    <nav className="bg-gray-900/60 backdrop-blur-md shadow-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Left: Avatar + Logo */}
          <div className="flex items-center space-x-3 relative" ref={avatarRef}>
            <button onClick={toggleAvatarMenu}>
              <img
                src={profileImage}
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-400 shadow-md object-cover cursor-pointer"
              />
            </button>

            {/* Avatar Dropdown */}
            {avatarMenuOpen && (
              <div className="absolute top-14 left-0 bg-white text-black rounded-md shadow-lg py-2 w-32 z-50">
                <Link
                  to="/MyProfile"
                  onClick={() => setAvatarMenuOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  My Profile
                </Link>
              </div>
            )}

            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
            >
              MyPortfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${linkClass} ${
                  location.pathname === link.to
                    ? "text-yellow-400 underline underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-yellow-400">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-lg px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-white hover:text-yellow-400 text-lg transition duration-300"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
