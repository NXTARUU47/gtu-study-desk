import React from "react";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-10 transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            Everything You Need to
            <span className="block bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
              Study Smarter
            </span>
          </h2>

          <p className="mt-5 text-slate-500 leading-relaxed">
            GTU StudyDesk is a simple student-focused platform created to bring
            useful GTU study resources together in one convenient place.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative flex justify-center">
            {/* Background */}
            <div className="absolute w-72 h-72 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-full blur-sm" />

            {/* Main Card */}
            <div className="relative w-full max-w-md p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-indigo-100">
              <div className="grid grid-cols-2 gap-4">
                {/* Notes */}
                <div className="p-5 rounded-2xl bg-indigo-50">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-xl">
                    📚
                  </div>

                  <h3 className="mt-4 font-bold text-slate-800">Study Notes</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Useful notes for your subjects.
                  </p>
                </div>

                {/* Papers */}
                <div className="p-5 rounded-2xl bg-teal-50">
                  <div className="w-11 h-11 rounded-xl bg-teal-500 text-white flex items-center justify-center text-xl">
                    📄
                  </div>

                  <h3 className="mt-4 font-bold text-slate-800">
                    Previous Papers
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Practice with GTU papers.
                  </p>
                </div>

                {/* Subjects */}
                <div className="p-5 rounded-2xl bg-amber-50">
                  <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl">
                    📖
                  </div>

                  <h3 className="mt-4 font-bold text-slate-800">Subjects</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Find your semester subjects.
                  </p>
                </div>

                {/* Preparation */}
                <div className="p-5 rounded-2xl bg-violet-50">
                  <div className="w-11 h-11 rounded-xl bg-violet-500 text-white flex items-center justify-center text-xl">
                    🎯
                  </div>

                  <h3 className="mt-4 font-bold text-slate-800">
                    Exam Preparation
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Prepare better for exams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-500">
              Why GTU StudyDesk?
            </span>

            <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
              Your Study Resources,
              <span className="text-indigo-500"> All in One Place.</span>
            </h3>

            <p className="mt-5 text-slate-500 leading-relaxed">
              Finding the right study material shouldn't be difficult. GTU
              StudyDesk is designed to make your academic preparation easier by
              organizing important resources in a simple and student-friendly
              interface.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed">
              Whether you are looking for notes, previous year papers, subject
              information or exam preparation resources, the goal is to help you
              spend less time searching and more time learning.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Simple & Easy to Use
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    Quickly find the resources you need without unnecessary
                    complexity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">GTU Focused</h4>

                  <p className="text-sm text-slate-500 mt-1">
                    Resources are organized with GTU students in mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Free & Accessible
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    Access useful study resources from anywhere, whenever you
                    need them.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-teal-50 border border-indigo-100">
              <p className="text-slate-600 font-medium">
                "Learn smarter, prepare better, and move one step closer to your
                goals."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
