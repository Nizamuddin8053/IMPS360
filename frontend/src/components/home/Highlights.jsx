import {
  FaGraduationCap,
  FaTrophy,
  FaLaptop,
  FaFlask,
  FaBook,
  FaBus
} from "react-icons/fa";

const data = [
  { icon: <FaGraduationCap />, title: "Academic Excellence" },
  { icon: <FaTrophy />, title: "Sports Achievements" },
  { icon: <FaLaptop />, title: "Smart Classrooms" },
  { icon: <FaFlask />, title: "Modern Laboratories" },
  { icon: <FaBook />, title: "Digital Library" },
  { icon: <FaBus />, title: "Safe Transportation" }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gray-50">

      <h2 className="text-center text-4xl font-bold mb-12">
        School Highlights
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-5">

        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:-translate-y-2 transition"
          >
            <div className="text-5xl text-blue-700 flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-xl">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Highlights;