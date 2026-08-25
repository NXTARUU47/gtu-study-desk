import React from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mt-16">
      {/* 🌊 Animated Wave Container (Positioned right above footer) */}
      <div className="w-full h-16 sm:h-20 md:h-24 overflow-hidden leading-none pointer-events-none">
        <svg
  viewBox="0 0 1440 240"
  preserveAspectRatio="none"
  class="w-full h-full block"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="wave-dark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#111827" stop-opacity="1" />
    </linearGradient>
  </defs>

  <path
    fill="#111827"
    fill-opacity="0.3"
    d="M0,96 C280,160 480,40 720,100 C960,160 1200,60 1440,110 L1440,240 L0,240 Z"
  >
    <animate
      attributeName="d"
      dur="12s"
      repeatCount="indefinite"
      values="
        M0,96 C280,160 480,40 720,100 C960,160 1200,60 1440,110 L1440,240 L0,240 Z;
        M0,120 C320,40 520,160 760,90 C1000,20 1180,140 1440,80 L1440,240 L0,240 Z;
        M0,96 C280,160 480,40 720,100 C960,160 1200,60 1440,110 L1440,240 L0,240 Z
      "
    />
  </path>

  {/* <!-- Midground Layer --> */}
  <path
    fill="#111827"
    fill-opacity="0.55"
    d="M0,130 C240,60 480,160 720,110 C960,60 1200,150 1440,90 L1440,240 L0,240 Z"
  >
    <animate
      attributeName="d"
      dur="8s"
      repeatCount="indefinite"
      values="
        M0,130 C240,60 480,160 720,110 C960,60 1200,150 1440,90 L1440,240 L0,240 Z;
        M0,80 C260,150 500,70 740,130 C980,190 1220,80 1440,120 L1440,240 L0,240 Z;
        M0,130 C240,60 480,160 720,110 C960,60 1200,150 1440,90 L1440,240 L0,240 Z
      "
    />
  </path>

  {/* <!-- Foreground Primary Wave --> */}
  <path
    fill="url(#wave-dark-grad)"
    d="M0,70 C360,140 720,30 1080,100 C1260,135 1380,85 1440,60 L1440,240 L0,240 Z"
  >
    <animate
      attributeName="d"
      dur="5s"
      repeatCount="indefinite"
      values="
        M0,70 C360,140 720,30 1080,100 C1260,135 1380,85 1440,60 L1440,240 L0,240 Z;
        M0,100 C320,30 680,150 1040,70 C1220,30 1360,110 1440,90 L1440,240 L0,240 Z;
        M0,70 C360,140 720,30 1080,100 C1260,135 1380,85 1440,60 L1440,240 L0,240 Z
      "
    />
  </path>
</svg>
      </div>

      {/* 🖤 Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            {/* Logo & About */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <FaGraduationCap className="text-2xl sm:text-3xl text-blue-500" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  GTU Study Desk
                </h2>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-6">
                Your study companion for GTU students. Get study materials,
                notes, practicals, papers and useful resources in one place.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#study-materials"
                    className="hover:text-blue-500 transition"
                  >
                    Study Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    Previous Papers
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-500 transition">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Resources
              </h3>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Semester Notes</li>
                <li>Practical Programs</li>
                <li>GTU Papers</li>
                <li>Important Questions</li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Connect With Us
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Follow GTU Buddy for updates and new study materials.
              </p>

              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-5 sm:pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 sm:gap-3 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} GTU Study Desk. All rights reserved.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm">
              Made with ❤️ for GTU Students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
