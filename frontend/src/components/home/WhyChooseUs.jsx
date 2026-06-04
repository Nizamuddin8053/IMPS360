import { FaCheckCircle } from "react-icons/fa";
import schoolImage from "../../assets/logo/School.jpeg"
const points = [
  "Experienced Faculty",
  "CBSE Curriculum",
  "Smart Learning Environment",
  "Personality Development",
  "Computer Education",
  "Sports & Cultural Activities",
  "Safe and Secure Campus",
  "Parent Engagement"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-5">

        <div className="h-96 bg-gray-200 rounded-xl">
          <img src={schoolImage} alt="School image"/>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">
            Why Choose Us?
          </h2>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex gap-3 items-center">
                <FaCheckCircle className="text-green-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;