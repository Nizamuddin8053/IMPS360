import { FaStar } from "react-icons/fa6";

const reviews = [
  {
    name: "Mohammad Yusuf",
    role: "Parent of Grade 9 Student",
    text: "The individual academic support planning here is amazing. Teachers are completely dedicated and structural updates via SMS dashboards keep us well informed.",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    role: "Alumna (Batch of 2022)",
    text: "Ismail School provided me with competitive coding baselines that made my transitions into elite University engineering programs incredibly fluid.",
    rating: 5
  },
  {
    name: "Dr. R. K. Verma",
    role: "Parent of Grade 11 Student",
    text: "Impressed by the focus on sports and lab facilities alongside strict board preparations. Highly recommend this school for absolute balanced growth.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          What Parents & Alumni Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl relative shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">{rev.name}</h4>
                <p className="text-blue-700 text-sm font-medium">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;