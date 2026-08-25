import React from "react";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative min-h-[calc(100vh-78px)] pt-20 px-4 sm:px-6 lg:px-10 overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"
          : "bg-gradient-to-br from-indigo-50 via-white to-teal-50"
      }`}
    >
      {/* Background Decorations */}
      <div
        className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/10" : "bg-indigo-200/30"
        }`}
      />

      <div
        className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl ${
          darkMode ? "bg-teal-500/10" : "bg-teal-200/30"
        }`}
      />

      <div className="relative max-w-[1200px] mx-auto min-h-[calc(100vh-150px)] flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Hero Content */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border shadow-sm ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-indigo-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />

              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                🎓 Made for GTU Students
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Your GTU Journey
              <br />

              <span className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Find GTU study materials, previous year papers, notes, syllabus
              and useful resources — all in one simple place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">

              <a
                href="#study-materials"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Study Materials →
              </a>

              <a
                href="#about"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl border font-semibold transition-all duration-200 ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-slate-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-slate-800"
                    : "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50"
                }`}
              >
                Learn More
              </a>

            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">

              <div>
                <h3 className="text-2xl font-bold text-indigo-500">
                  8+
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Semesters
                </p>
              </div>

              <div
                className={`w-px h-10 hidden sm:block ${
                  darkMode ? "bg-slate-700" : "bg-slate-200"
                }`}
              />

              <div>
                <h3 className="text-2xl font-bold text-teal-500">
                  100+
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Resources
                </p>
              </div>

              <div
                className={`w-px h-10 hidden sm:block ${
                  darkMode ? "bg-slate-700" : "bg-slate-200"
                }`}
              />

              <div>
                <h3 className="text-2xl font-bold text-amber-500">
                  GTU
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Focused
                </p>
              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[430px] h-[430px]">

              {/* Main Circle */}
              <div
                className={`absolute inset-8 rounded-full bg-gradient-to-br ${
                  darkMode
                    ? "from-indigo-950 to-teal-950"
                    : "from-indigo-100 to-teal-100"
                }`}
              />

              {/* Center Card */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div
                  className={`w-64 h-64 rounded-3xl border shadow-2xl flex flex-col items-center justify-center ${
                    darkMode
                      ? "bg-slate-900 border-slate-700 shadow-black/40"
                      : "bg-white border-slate-100 shadow-indigo-100"
                  }`}
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-4xl font-extrabold shadow-lg">
                    G
                  </div>

                  <h2
                    className={`mt-5 text-2xl font-extrabold ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    GTU StudyDesk
                  </h2>

                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Learn • Prepare • Succeed
                  </p>
                </div>

              </div>

              {/* Floating Cards */}

              <div
                className={`absolute top-8 right-0 px-5 py-3 rounded-2xl shadow-lg border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-100"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  📚 Notes
                </p>
              </div>

              <div
                className={`absolute bottom-14 left-0 px-5 py-3 rounded-2xl shadow-lg border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-100"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  📄 Previous Papers
                </p>
              </div>

              <div
                className={`absolute bottom-2 right-10 px-5 py-3 rounded-2xl shadow-lg border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-100"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  🎯 Exam Prep
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;