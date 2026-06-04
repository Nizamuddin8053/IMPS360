import {
  Phone,
  Mail,
  Clock3,
  GraduationCap,
  Form,
} from "lucide-react";

import contact from '../utils/contact';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="h-11 flex items-center justify-between">

          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={15} />
              <span>{contact.phone}</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Mail size={15} />
              <span>{contact.email}</span>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Clock3 size={15} />
              <span>{contact.school_time}</span>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1.5 rounded-md font-semibold transition">
            <GraduationCap size={16} />
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopBar;