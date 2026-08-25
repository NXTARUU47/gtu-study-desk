import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

import Semester1 from "./Semesters/Semester1";
import Semester2 from "./Semesters/Semester2";
import Semester3 from "./Semesters/Semester3";
import Semester4 from "./Semesters/Semester4";
import Semester5 from "./Semesters/Semester5";
import Semester6 from "./Semesters/Semester6";
import Semester7 from "./Semesters/Semester7";
import Semester8 from "./Semesters/Semester8";

import StudyMaterials from "./components/StudyMaterials";
import About from "./components/About";
import NotFound from "./components/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ darkMode, setDarkMode }) {
  const { pathname } = useLocation();

  const validRoutes = [
    "/",
    "/aboutus",
    "/study-materials",
    "/semester-1",
    "/semester-2",
    "/semester-3",
    "/semester-4",
    "/semester-5",
    "/semester-6",
    "/semester-7",
    "/semester-8",
    "/contact",
  ];

  const isValidRoute = validRoutes.includes(pathname);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <ScrollToTop />

      {/* Header */}
      {isValidRoute && (
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}

      <main
        className={`flex-1 ${
          isValidRoute ? "pt-[70px] md:pt-[78px]" : ""
        }`}
      >
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          {/* About */}
          <Route
            path="/aboutus"
            element={<About darkMode={darkMode} />}
          />

          {/* Study Materials */}
          <Route
            path="/study-materials"
            element={
              <StudyMaterials darkMode={darkMode} />
            }
          />

          {/* Semesters */}
          <Route
            path="/semester-1"
            element={<Semester1 darkMode={darkMode} />}
          />

          <Route
            path="/semester-2"
            element={<Semester2 darkMode={darkMode} />}
          />

          <Route
            path="/semester-3"
            element={<Semester3 darkMode={darkMode} />}
          />

          <Route
            path="/semester-4"
            element={<Semester4 darkMode={darkMode} />}
          />

          <Route
            path="/semester-5"
            element={<Semester5 darkMode={darkMode} />}
          />

          <Route
            path="/semester-6"
            element={<Semester6 darkMode={darkMode} />}
          />

          <Route
            path="/semester-7"
            element={<Semester7 darkMode={darkMode} />}
          />

          <Route
            path="/semester-8"
            element={<Semester8 darkMode={darkMode} />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact darkMode={darkMode} />}
          />

          {/* 404 - MUST BE LAST */}
          <Route
            path="*"
            element={<NotFound darkMode={darkMode} />}
          />

        </Routes>
      </main>

      {/* Footer */}
      {isValidRoute && (
        <Footer darkMode={darkMode} />
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("gtu-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "gtu-theme",
      darkMode ? "dark" : "light"
    );

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Layout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}

export default App;