const AdmissionCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-indigo-950 text-white">
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-5 space-y-6">
        <span className="bg-yellow-500/20 text-yellow-400 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider border border-yellow-500/30">
          Admissions Timeline 2026 - 2027
        </span>
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Secure Your Child's Academic Journey Today
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Seats are strictly limited across primary and secondary batches. Contact our counselor desk or fill out the digital application request form online.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-600/20 transition-all transform hover:-translate-y-0.5">
            Apply Online Now
          </button>
          <button className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition backdrop-blur-sm">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;