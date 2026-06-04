import { useState } from "react";
import { Link } from "react-router-dom";
import SchoolLogo from "../assets/logo/logo.jpeg";
import {
  Menu,
  X,
  LogOut,
  User
} from "lucide-react";

const Navbar = ({
  isLoggedIn,
  user,
  handleLogout,
}) => {

  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Academics",
    "Admissions",
    "Faculty",
    "Gallery",
    "Events",
    "Achievements",
    "Downloads",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        {/* Logo Section */}

        <div className="py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={SchoolLogo}
              alt="logo"
              className="w-16 h-16 rounded-full border-2 border-blue-600"
            />

            <div>
              <h1 className="font-bold text-2xl text-slate-800">
                Ismail Memorial Public School, Jamalgarh 
              </h1>

              <p className="text-sm text-slate-500">
                Knowledge • Discipline • Excellence
              </p>
            </div>

          </div>

          

          {isLoggedIn && (
            <div className="flex items-center gap-4">

              <div className="hidden md:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">

                <User size={18} />

                <span>
                  Welcome, {user?.name}
                </span>

              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          )}
        </div>

      </div>

      {!isLoggedIn && (
        <div className="bg-blue-700 text-white">

          <div className="max-w-7xl mx-auto px-4">

            <div className="h-14 flex items-center justify-between">

              <div className="hidden lg:flex items-center gap-8">

                {links.map((link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase()}`}
                    className="hover:text-yellow-300 transition"
                  >
                    {link}
                  </Link>
                ))}

              </div>

              <button
                className="lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </button>

              <Link
                to="/login"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md font-semibold"
              >
                Login
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;