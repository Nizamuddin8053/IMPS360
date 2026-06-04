import { FaQuoteLeft } from "react-icons/fa";
import PricipalPhoto from "../../assets/logo/Principal.jpeg"
const PrincipalMessage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-12 items-center">
        
        {/* Principal Image/Card */}
        <div className="text-center md:text-left">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <img 
              src={PricipalPhoto} 
              alt="Principal" 
              className="w-full max-w-sm h-96 object-cover object-top hover:scale-105 transition duration-500"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">Hemraj Sir</h3>
            <p className="text-blue-700 font-medium mt-1">Headmaster, IMPS</p>
            <p className="text-sm text-gray-500 mt-1">MA BEd.</p>
          </div>
        </div>

        {/* Message Body */}
        <div className="md:col-span-2 space-y-6">
          <div className="text-blue-700 text-4xl opacity-40">
            <FaQuoteLeft />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Nurturing Potential, Inspiring Excellence
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Ismail Memorial Public School. For over one decades, our institution has stood as a beacon of academic rigor and character construction. We believe that education is not merely the accumulation of facts, but the deep cultivation of critical reasoning, resilience, and ethical leadership.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Our holistic approach balances world-class science laboratory structures and advanced digital literacy with deep integration into sports and competitive activities. We invite you to join our growing community as we shape the leaders of tomorrow.
          </p>

          <div className="pt-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Read Full Annual Message
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;