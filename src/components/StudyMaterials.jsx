import React from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaNetworkWired,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function StudyMaterials({darkMode}) {
  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      year: "First Year",
      icon: <FaBookOpen />,
      color: "indigo",
      description: "Build your foundation with essential engineering subjects.",
    },
    {
      id: 2,
      title: "Semester 2",
      year: "First Year",
      icon: <FaCalculator />,
      color: "teal",
      description: "Strengthen your fundamentals and technical knowledge.",
    },
    {
      id: 3,
      title: "Semester 3",
      year: "Second Year",
      icon: <FaCode />,
      color: "amber",
      description: "Start exploring core programming and engineering concepts.",
    },
    {
      id: 4,
      title: "Semester 4",
      year: "Second Year",
      icon: <FaDatabase />,
      color: "violet",
      description:
        "Dive deeper into programming, databases and data structures.",
    },
    {
      id: 5,
      title: "Semester 5",
      year: "Third Year",
      icon: <FaLaptopCode />,
      color: "blue",
      description:
        "Develop advanced technical and software development skills.",
    },
    {
      id: 6,
      title: "Semester 6",
      year: "Third Year",
      icon: <FaNetworkWired />,
      color: "rose",
      description:
        "Prepare yourself for advanced concepts and real-world projects.",
    },
    {
      id: 7,
      title: "Semester 7",
      year: "Final Year",
      icon: <FaGraduationCap />,
      color: "emerald",
      description: "Focus on advanced subjects and final-year preparation.",
    },
    {
      id: 8,
      title: "Semester 8",
      year: "Final Year",
      icon: <FaGraduationCap />,
      color: "indigo",
      description: "Complete your GTU journey and prepare for your next step.",
    },
  ];

  const colorStyles = {
    indigo: {
      icon: "bg-indigo-100 text-indigo-600",
      badge: "bg-indigo-50 text-indigo-600",
      hover: "group-hover:border-indigo-200",
      button:
        "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
    },
    teal: {
      icon: "bg-teal-100 text-teal-600",
      badge: "bg-teal-50 text-teal-600",
      hover: "group-hover:border-teal-200",
      button:
        "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white",
    },
    amber: {
      icon: "bg-amber-100 text-amber-600",
      badge: "bg-amber-50 text-amber-600",
      hover: "group-hover:border-amber-200",
      button:
        "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    },
    violet: {
      icon: "bg-violet-100 text-violet-600",
      badge: "bg-violet-50 text-violet-600",
      hover: "group-hover:border-violet-200",
      button:
        "bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
    },
    blue: {
      icon: "bg-blue-100 text-blue-600",
      badge: "bg-blue-50 text-blue-600",
      hover: "group-hover:border-blue-200",
      button:
        "bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
    },
    rose: {
      icon: "bg-rose-100 text-rose-600",
      badge: "bg-rose-50 text-rose-600",
      hover: "group-hover:border-rose-200",
      button:
        "bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
    },
    emerald: {
      icon: "bg-emerald-100 text-emerald-600",
      badge: "bg-emerald-50 text-emerald-600",
      hover: "group-hover:border-emerald-200",
      button:
        "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    },
  };

  return (
    <section
      id="study-materials"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
            📚 Study Materials
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            Choose Your   <span className=" bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
              Semester
            </span>
          </h2>

          <p className="mt-5 text-slate-500 leading-relaxed">
            Find notes, previous year papers, practicals and useful study
            resources organized according to your GTU semester.
          </p>
        </div>

        {/* Semester Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((semester) => {
            const styles = colorStyles[semester.color];

            return (
              <div
                key={semester.id}
                className={`group relative bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${styles.hover}`}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 ${styles.icon}`}
                  >
                    {semester.icon}
                  </div>

                  {/* Semester Number */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${styles.badge}`}
                  >
                    SEM {semester.id}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-6">
                  <h3 className="text-xl font-extrabold text-slate-800">
                    {semester.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {semester.year}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-500 leading-relaxed min-h-[60px]">
                  {semester.description}
                </p>

                {/* Stats */}
                {/* <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-slate-700">
                      {semester.subjects}
                    </p>

                    <p className="text-[11px] text-slate-400">Subjects</p>
                  </div>

                  <div className="border-x border-slate-100">
                    <p className="text-lg font-bold text-indigo-500">
                      {semester.notes}
                    </p>

                    <p className="text-[11px] text-slate-400">Notes</p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-teal-500">
                      {semester.papers}
                    </p>

                    <p className="text-[11px] text-slate-400">Papers</p>
                  </div>
                </div> */}

                {/* Button */}
                {/* Button */}
                <Link
                  to={`/semester-${semester.id}`}
                  className={`mt-6 w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ${styles.button}`}
                >
                  View Subjects
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-teal-500 p-8 sm:p-10">
          {/* Decoration */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-10 w-52 h-52 bg-white/10 rounded-full" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Can't find what you're looking for?
              </h3>

              <p className="mt-2 text-white/80">
                More study resources will be added regularly.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-7 py-3.5 rounded-xl bg-white text-indigo-600 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Material
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyMaterials;
