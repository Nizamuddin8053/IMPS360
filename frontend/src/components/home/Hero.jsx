import { FaGraduationCap } from "react-icons/fa";

const Hero = () => {
  return (
   <section className="bg-white">
  <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 text-center">

    <h2 className="font-semibold text-2xl md:text-4xl">
      Welcome To
    </h2>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
      Ismail Memorial Public School
    </h1>

    <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto">
      Empowering Young Minds, Building Future Leaders
    </p>

    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
        Admission Open 2026-27
      </button>

      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
        Virtual Campus Tour
      </button>
    </div>
  </div>

  {/* Stats Card */}
  <div className="max-w-6xl mx-auto px-4 pb-10">
    <div className="bg-white shadow-xl rounded-2xl border">

      <div className="grid grid-cols-2 md:grid-cols-4">

        <div className="py-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            400+
          </h2>
          <p className="text-sm md:text-base">Students</p>
        </div>

        <div className="py-5 text-center border-l">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            20+
          </h2>
          <p className="text-sm md:text-base">Teachers</p>
        </div>

        <div className="py-5 text-center md:border-l">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            10+
          </h2>
          <p className="text-sm md:text-base">Years Excellence</p>
        </div>

        <div className="py-5 text-center border-l">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            100%
          </h2>
          <p className="text-sm md:text-base">Board Results</p>
        </div>

      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;