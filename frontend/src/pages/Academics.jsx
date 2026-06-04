import React from "react";
import { 
  FaGraduationCap, FaBook, FaChalkboardTeacher, 
  FaCalendarAlt, FaClipboardCheck, FaUsers, FaTasks 
} from "react-icons/fa";

const Academic = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* Hero Banner */}
      <section className=" text-black/80 py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Academic Excellence
          </h1>
          <p className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto">
            Nurturing intellectual growth, creativity, discipline, and character development from Nursery to Class 10.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
            <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Our Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Balanced & Value-Based Curriculum
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our curriculum is meticulously designed to provide a balanced blend of academic knowledge, practical skills, and moral values. We structure age-appropriate learning experiences that actively encourage curiosity, critical thinking, and lifelong learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Concept-based learning",
                "Activity-oriented teaching",
                "Continuous assessment",
                "Character & value education",
                "Sports & physical health",
                "Digital learning support"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          

          <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-blue-800 text-9xl font-bold opacity-40 pointer-events-none">
              K-10
            </div>
            <span className="bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Structure
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-2">Classes Offered</h3>
            <p className="text-blue-100 text-lg font-medium mb-6">Nursery to 10th Grade</p>
            <p className="text-blue-200 text-sm leading-relaxed border-t border-blue-800 pt-6">
              Our classes focus deeply on building robust foundational blocks. We cultivate core mental, language, mathematical, and socio-emotional milestones early on to ensure frictionless alignment with board regulations down the road.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Grid Section */}
      <section className="bg-gray-100 py-16 px-5 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Course Matrix</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">Subjects Offered</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Primary Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 border-b pb-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><FaGraduationCap size={20}/></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Primary Section</h3>
                  <p className="text-xs text-gray-500">Nursery – Class V</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {["English", "Hindi", "Mathematics", "EVS", "General Knowledge", "Computer Basics", "Art & Craft", "Physical Ed.", "Urdu", "Arabic"].map((sub, i) => (
                  <li key={i} className="bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">{sub}</li>
                ))}
              </ul>
            </div>

            {/* Middle Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 border-b pb-4 mb-4">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl"><FaBook size={20}/></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Middle Section</h3>
                  <p className="text-xs text-gray-500">Class VI – VIII</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {["English", "Hindi", "Mathematics", "Science", "Social Science", "Urdu / Arabic", "Computer Science", "General Knowledge", "Physical Ed."].map((sub, i) => (
                  <li key={i} className="bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">{sub}</li>
                ))}
              </ul>
            </div>

            {/* Secondary Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 border-b pb-4 mb-4">
                <div className="p-3 bg-green-50 text-green-700 rounded-xl"><FaChalkboardTeacher size={20}/></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Secondary Section</h3>
                  <p className="text-xs text-gray-500">Class IX – X</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                {["English & Hindi Literature", "Advanced Mathematics", "Integrated Science (Phy/Chem/Bio)", "Social Science Grid", "Information Technology", "Physical & Value Education"].map((sub, i) => (
                  <li key={i} className="bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 font-medium text-gray-700">{sub}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Pedagogy</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Teaching Methodology</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Student-Centered", desc: "Placing individual student needs and paste at the heart of our lesson maps." },
            { title: "Smart Techniques", desc: "Employing interactive media modules to simplify complex academic concepts." },
            { title: "Project-Based", desc: "Fostering collaboration and practical problem solving via active group research." },
            { title: "Regular Tracking", desc: "Constructive assignments engineered to review daily classroom learning metrics." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-500 transition-colors">
              <span className="text-blue-700 font-bold text-lg block mb-2">0{index + 1}.</span>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Calendar & Assessment System Grid */}
      <section className="bg-gray-900 text-white py-16 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Calendar */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-700 text-white rounded-xl"><FaCalendarAlt size={22}/></div>
              <h2 className="text-2xl font-bold">Academic Calendar</h2>
            </div>
            <p className="text-blue-200 text-sm mb-6">
              Our structured academic cycle extends from <strong className="text-white">April to March</strong>. Handouts covering exact operational event mappings are distributed locally at session inaugurations.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "New Session Launch", "Periodic Unit Tests", "Half-Yearly Exams", 
                "Annual Sports Events", "Cultural Programs", "Parent-Teacher Meets", 
                "Final Term Board Evaluation", "Result Declaration"
              ].map((evt, idx) => (
                <span key={idx} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium px-3 py-2 rounded-lg">
                  {evt}
                </span>
              ))}
            </div>
          </div>

          {/* Assessment System */}
          <div className="bg-gray-800/50 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500 text-gray-900 rounded-xl"><FaClipboardCheck size={22}/></div>
              <h2 className="text-2xl font-bold">Evaluation Framework</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Continuous comprehensive monitoring algorithms are optimized to identify specific conceptual strong points and resolve cognitive lags.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-3">Core Components</h3>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 mb-6">
              <div>✔ Class Active Participation</div>
              <div>✔ Home-tasks & Research</div>
              <div>✔ Periodic Unit Tests</div>
              <div>✔ Lab & Practical Operations</div>
              <div>✔ Dynamic Portfolios & Projects</div>
              <div>✔ Term-End Comprehensive Exams</div>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Core Target Objectives</h3>
              <p className="text-sm text-gray-400 italic">
                "Measure real-time growth, track skill development, and deliver constructive actionable vectors to boost personal academic potential."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Homework & Holistic Collaboration Section */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-8">
        
        {/* Homework Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
          <div className="text-blue-700 mt-1"><FaTasks size={24}/></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Independent Homework & Research</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Assignments run synchronous to core lectures. Regular subject-based home tasks, group presentations, and creative research templates ensure students safely develop autonomous problem-solving capabilities outside class hours.
            </p>
          </div>
        </div>

        {/* PTM Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
          <div className="text-blue-700 mt-1"><FaUsers size={24}/></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Parent-Teacher Cooperation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Regularly scheduled PTM cycles synchronize family stakeholders with faculty mentors. These loops monitor performance metrics, resolve academic concerns, and build robust collaborative pathways for optimal tracking.
            </p>
          </div>
        </div>

      </section>

      {/* Co-Curricular & Goal Footer */}
      <section className="bg-blue-700 text-white py-16 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-800 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Beyond Textbooks
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-6">Holistic Co-Curricular Learning</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-10 text-sm">
            {["Sports & Games", "Cultural Festivals", "Fine Arts & Craft", "Debate Panels", "Science Exhibitions", "Yoga & Physical Conditioning"].map((item, i) => (
              <span key={i} className="bg-blue-600/50 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-xl font-medium">
                {item}
              </span>
            ))}
          </div>
          
          <div className="border-t border-blue-600 pt-8 max-w-xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Our Academic Ultimate Vision</h3>
            <p className="text-lg text-blue-100 font-serif italic">
              "To develop knowledgeable, confident, and highly responsible individuals who are fully prepared to excel academically and contribute positively to our global society."
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academic;