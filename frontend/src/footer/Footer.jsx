import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Safe Twitter icon for modern react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl tracking-tight">Ismail School</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering modern generations with cutting-edge learning models, digital access, and strong moral baselines.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.facebook.com/profile.php?id=100067159031281&sk=about" target="blank" className="hover:text-yellow-400 transition text-lg"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400 transition text-lg"><FaXTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition text-lg"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition text-lg"><FaLinkedin /></a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-b border-gray-800 pb-2">Explore Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">About Academy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Academic Curriculum</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Admission Structure</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Fee Policy Rules</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Mandatory Disclosures</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-b border-gray-800 pb-2">Portals & Info</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Student Login Hub</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Parent Desk Portal</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Exams & Result Desk</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Careers / Jobs</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Online Grievance Panel</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <h4 className="text-white font-semibold mb-4 border-b border-gray-800 pb-2">Get In Touch</h4>
          <p className="flex items-start gap-3 text-gray-400">
            <span className="mt-1 text-blue-500"><FaMapMarkerAlt /></span>
            <span>Ismail Memorial Public School, Jamalgarh Manota Road, Punahana 122508 Mewat</span>
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <span className="text-blue-500"><FaPhoneAlt /></span>
            <span>+91 9876543210</span>
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <span className="text-blue-500"><FaEnvelope /></span>
            <span>info@ismailschool.com</span>
          </p>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-5 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Ismail Memorial Public School. All Rights Reserved.</p>
        <p>Designed and Developed by Nizamuddin</p>
      </div>
    </footer>
  );
};

export default Footer;