import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Experience from "./pages/Experience.jsx";
import Certificates from "./pages/Certificates.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/Education.jsx";
import Achievements from "./pages/Achievements.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <Router>
        <Navbar />
        {/* <main className="flex-grow px-4 py-6"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/MyProfile" element={<MyProfile />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        {/* </main> */}
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
