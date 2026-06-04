import { Bell } from "lucide-react";

const NoticeTicker = () => {
  return (
    <div className="bg-yellow-400 border-b">

      <div className="max-w-7xl mx-auto flex items-center">

        <div className="bg-red-600 text-white px-5 py-3 flex items-center gap-2 font-semibold">

          <Bell size={18} />

          NOTICE
        </div>

        <div className="flex-1 overflow-hidden">

          <marquee
            className="py-3 font-medium"
            scrollamount="6"
          >
            📢 Admissions Open For Session 2026-27 |
            🏆 Congratulations To Class 10 Toppers |
            📅 Parent Teacher Meeting On 15 August |
            🎉 Annual Function Registration Open |
            🚌 New Transport Routes Available
          </marquee>

        </div>

      </div>

    </div>
  );
};

export default NoticeTicker;