const facilities = [
  "Computer Lab",
  "Science Lab",
  "Library",
  "Playground",
  "Transport",
  "CCTV Security",
  "Medical Room",
  "Smart Classes"
];

const Facilities = () => {
  return (
    <section className="py-20 bg-gray-50">

      <h2 className="text-center text-4xl font-bold mb-12">
        Our Facilities
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-5">

        {facilities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-48 bg-gray-200"></div>

            <div className="p-5">
              <h3 className="font-bold">{item}</h3>
              <p className="text-gray-600 mt-2">
                Short description here.
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Facilities;