
const Achievements = () => {
  return (
    <section className="py-20 bg-blue-700 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 text-center gap-8">

        <div>
          <h2 className="text-5xl font-bold">
            400+
          </h2>
          <p>Students</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            {/* <CountUp end={85} />+ */}
            20+
          </h2>
          <p>Faculty Members</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            10+
          </h2>
          <p>Awards</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            100%
          </h2>
          <p>Board Results</p>
        </div>

      </div>

    </section>
  );
};

export default Achievements;