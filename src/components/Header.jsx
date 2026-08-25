import React from "react";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaGraduationCap, FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

function Header({ darkMode, setDarkMode }) {
  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#study-materials", label: "Study Materials" },
    { to: "#contact", label: "Contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileNav = (to) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(to);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        backdrop-blur-md
        border-b
        z-50
        transition-all
        duration-300
        ${
          darkMode
            ? "bg-slate-950/95 border-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            : "bg-white/95 border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
        }
      `}
    >
      <nav
        className="
          w-full
          max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          h-[70px]
          md:h-[78px]
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center sm:justify-start gap-2">

            <FaGraduationCap
              className={`
                text-2xl
                sm:text-3xl
                transition-colors
                duration-300
                ${darkMode ? "text-blue-400" : "text-blue-500"}
              `}
            />

            <h2
              className={`
                text-xl
                sm:text-2xl
                font-bold
                transition-colors
                duration-300
                ${darkMode ? "text-white" : "text-slate-900"}
              `}
            >
              GTU Study Desk
            </h2>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7">

          {navItems.map(({ to, label }) => (
            <li key={to}>
              <a
                href={to}
                className={`
                  relative
                  py-2
                  font-medium
                  transition-all
                  duration-200
                  group
                  ${
                    darkMode
                      ? "text-slate-300 hover:text-indigo-400"
                      : "text-slate-600 hover:text-indigo-600"
                  }
                `}
              >
                {label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-indigo-500
                    to-teal-400
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}

        </ul>

        {/* Right Side */}
        
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`
            lg:hidden
            border-t
            shadow-lg
            ${
              darkMode
                ? "border-slate-800 bg-slate-950"
                : "border-slate-100 bg-white"
            }
          `}
        >
          <ul className="px-4 py-4 space-y-1">

            {navItems.map(({ to, label }) => (
              <li key={to}>

                <a
                  href={to}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNav(to);
                  }}
                  className={`
                    flex
                    items-center
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      darkMode
                        ? "text-slate-300 hover:bg-slate-800 hover:text-indigo-400"
                        : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                    }
                  `}
                >
                  {label}
                </a>

              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;