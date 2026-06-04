import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const newsItems = [
  {
    date: "June 02, 2026",
    title: "IMPS Bags Top Honors in Inter-School Science Exhibition",
    summary: "Our senior secondary innovators secured first place for their sustainable solar purification grid prototype.",
    category: "Achievements"
  },
  {
    date: "May 28, 2026",
    title: "Enrollment Open for Specialized AI & Robotics Summer Camps",
    summary: "Applications are now live for middle schoolers looking to master basic Python automation structures.",
    category: "Admissions"
  },
  {
    date: "May 15, 2026",
    title: "Upgraded High-Speed Digital Library System Launched",
    summary: "Students can now instantly tap into over 10,000+ national e-journals directly from their home dashboard accounts.",
    category: "Campus Update"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          Latest News & Updates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 shadow-lg rounded-xl flex flex-col justify-between hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center gap-2 text-gray-500">
                    <FaCalendarAlt className="text-blue-700" /> {news.date}
                  </span>
                  <span className="bg-blue-50 text-blue-700 font-semibold text-xs px-2.5 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 leading-snug mb-3 hover:text-blue-700 cursor-pointer transition">
                  {news.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                  {news.summary}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                <button className="text-blue-700 font-semibold flex items-center gap-2 group text-sm">
                  Read Full Story 
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;