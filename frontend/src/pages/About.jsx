import React from "react";
import { FaQuoteLeft, FaHistory, FaEye, FaBullseye, FaInfoCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* Page Header Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Our Institution
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Nurturing young minds with knowledge, discipline, and moral values since 2006.
          </p>
        </div>
      </section>

      {/* Introduction & History Section */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* left who we are */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ismail Memorial Public School is a renowned educational institution located in Jamalgarh, Punhana, District Nuh (Mewat), Haryana. Operating under the guidance of the <strong className="text-gray-800">Mewat Education Development Society</strong>, the school offers a vibrant co-educational learning environment from Nursery to Class 10.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We promote equal opportunities for all students, ensuring that academic growth matches character building and structural safety.
          </p>
        </div>

        {/* right history  */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 text-gray-100 text-9xl pointer-events-none">
            <FaHistory />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="p-2 bg-blue-50 text-blue-700 rounded-lg"><FaHistory size={18}/></span>
            Our History
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2006, Ismail Memorial Public School was established with a vision to bring quality education to the children of Jamalgarh and nearby villages. Over the years, the institution has grown steadily, earning the trust of parents and becoming a respected center of learning in the region. 
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The school has successfully guided multiple batches of students and continues to focus on academic excellence, character development, and holistic growth.
          </p>
        </div>
      </section>

      {/* Side-by-Side Messages Section */}
      <section className="bg-gray-100 py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Leadership Message</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Words from Our Leaders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Director's Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-700 flex flex-col justify-between relative">
              <FaQuoteLeft className="text-blue-100 text-5xl absolute top-6 right-6 pointer-events-none" />
              <div>
                <h3 className="text-xs font-bold uppercase text-blue-700 tracking-widest mb-1">Message From The</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Director</h4>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "Dear Students, Parents, and Visitors, Welcome to Ismail Memorial Public School. Education is the foundation of a strong and progressive society. At our school, we strive to create an environment where every child can discover their potential, develop confidence, and achieve academic excellence. Our goal is not only to educate students but also to nurture responsible citizens who uphold integrity, respect, and compassion."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-lg">Director</p>
                <p className="text-xs text-gray-500">Ismail Memorial Public School</p>
              </div>
            </div>

            {/* Principal's Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-500 flex flex-col justify-between relative">
              <FaQuoteLeft className="text-yellow-100 text-5xl absolute top-6 right-6 pointer-events-none" />
              <div>
                <h3 className="text-xs font-bold uppercase text-yellow-600 tracking-widest mb-1">Message From The</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Headmaster</h4>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "Dear Students and Parents, It is my privilege to welcome you to Ismail Memorial Public School. Our school is committed to providing a balanced education that focuses on academic achievement, character building, and overall personality development. We encourage students to think independently, work hard, and embrace challenges with confidence."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-lg">Headmaster</p>
                <p className="text-xs text-gray-500">Ismail Memorial Public School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Commitment */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-xl mb-6">
              <FaBullseye size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex items-start gap-2">⏱ High-quality education in a safe, nurturing space.</li>
              <li className="flex items-start gap-2">🌱 Developing confident and compassionate minds.</li>
              <li className="flex items-start gap-2">🧠 Encouraging critical thinking and lifelong learning.</li>
              <li className="flex items-start gap-2">⚖ Instilling core moral values and structural discipline.</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-xl mb-6">
              <FaEye size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become a leading educational institution that empowers students with knowledge, skills, and values necessary to succeed in a rapidly changing world while contributing positively to society.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-xl mb-6">
              <FaInfoCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Ismail Memorial Public School, we believe that education is the key to transforming lives. We are committed to empowering students with knowledge, values, and skills that prepare them for future challenges and global opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* School Directory Data Table */}
      <section className="bg-white py-16 px-5 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Official School Details</h2>
            <p className="text-gray-500 mt-2 text-sm">Key organizational data registry</p>
          </div>
          
          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-700 text-sm">Details</th>
                  <th className="p-4 font-semibold text-gray-700 text-sm">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50 w-1/3">School Name</td><td className="p-4 text-gray-600">Ismail Memorial Public School</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">Established</td><td className="p-4 text-gray-600">2006</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">Management</td><td className="p-4 text-gray-600">Mewat Education Development Society</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">Type</td><td className="p-4 text-gray-600">Private School</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">Location</td><td className="p-4 text-gray-600">Jamalgarh, Punhana, District Nuh (Mewat), Haryana</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">PIN Code</td><td className="p-4 text-gray-600">122508</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">Classes Offered</td><td className="p-4 text-gray-600">Nursery to Class 10</td></tr>
                <tr><td className="p-4 font-medium text-gray-900 bg-gray-50/50">School Category</td><td className="p-4 text-gray-600">Co-Educational</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;