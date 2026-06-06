import React, { useState } from "react";
import { 
  FaClipboardList, FaCheckCircle, 
  FaFileInvoiceDollar, FaEnvelopeOpenText, FaDownload, 
  FaPhoneAlt, FaMapMarkerAlt, FaIdCard 
} from "react-icons/fa";

import { FaUserGraduate } from "react-icons/fa6";

import Footer from "../footer/Footer";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    email: "",
    targetClass: "",
    address: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form processing can be safely attached here
    alert("Thank you for your inquiry! Our admission team will contact you shortly.");
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* Banner Block */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Session 2026-27
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Join Our Educational Family
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Admissions are officially open for students from Nursery to Class X. Apply early to secure limited seats.
          </p>
        </div>
      </section>

      {/* Step-by-Step Interactive Pathway */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Enrollment Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">The Admission Process</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {[
            { step: "01", name: "Inquiry", desc: "Submit an online inquiry form or visit our Jamalgarh campus." },
            { step: "02", name: "Application", desc: "Obtain the formal registration form directly from the office desk." },
            { step: "03", name: "Documents", desc: "Submit completed paperwork alongside verifiable statutory records." },
            { step: "04", name: "Assessment", desc: "Attend an age-appropriate interaction session or basic evaluation." },
            { step: "05", name: "Confirmation", desc: "Receive your enrollment voucher post structural credential verification." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col justify-between">
              <div>
                <span className="text-4xl font-black text-blue-50 block mb-2">{item.step}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 border-t pt-3 text-blue-700 font-semibold text-xs tracking-wider uppercase">
                Step Done →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Block: Requirements & Fees */}
      <section className="bg-gray-100 py-16 px-5 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Eligibility Framework */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><FaUserGraduate size={20}/></div>
              <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-700 pl-4">
                <h4 className="font-bold text-gray-900 text-base">Nursery Units</h4>
                <p className="text-gray-500 text-sm mt-1">Minimum base age alignment configured strictly in accordance with regional ministry guidelines.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-bold text-gray-900 text-base">Classes I – VIII</h4>
                <p className="text-gray-500 text-sm mt-1">Successful validation of previous grade milestones from any recognized academic board alongside matching Transfer Certificates.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold text-gray-900 text-base">Classes IX – X</h4>
                <p className="text-gray-500 text-sm mt-1">Subjected entirely to immediate classroom seat availability margins and past comprehensive transcript checks.</p>
              </div>
            </div>
          </div>

          {/* Secure Document Inventory Checklist */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><FaClipboardList size={20}/></div>
              <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">Please submit physical self-attested duplicates of the following credentials during entry evaluations:</p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border">Birth Certificate</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border">2 Passport Size Photo</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border">Prior Term Report Cards</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border">Transfer Certificate</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border">Valid Residence Proof</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border"><FaIdCard className="text-blue-700" /> Student Identity Records</li>
              <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border"><FaIdCard className="text-blue-700" /> Parent / Guardian Records</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Structured Fee Matrix & Value Pitch */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-3 gap-8">
        
        {/* Fee Matrix Box */}
        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-xl mb-6">
              <FaFileInvoiceDollar size={22} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fee Structure</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Our fee parameters are deliberately designed to ensure quality education remains accessible and affordable for families across the region.
            </p>
            <div className="border-t border-gray-800 pt-4 space-y-2 text-xs uppercase tracking-wider text-gray-300 font-medium">
              <div>• Standard Admission Base Fees</div>
              <div>• Bi-Monthly Tuition Modules</div>
              <div>• Term Assessment & Exam Costs</div>
              <div>• Annual Institutional Infrastructure Fund</div>
              <div>• Creative Activities Contribution</div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-yellow-500 font-medium">
            * Reach out directly to our helpdesk to acquire itemized structural charts.
          </div>
        </div>

        {/* Value Pitch Content Area */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Ismail Memorial Public School?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Experienced and Highly Dedicated Faculty",
              "Uncompromising Focus on High-Quality Education",
              "Safe, Monitored, and Completely Secure Campus",
              "Inclusive and Vibrant Co-Educational Space",
              "Continuous Balance of Academic & Sports Pillars",
              "Individual Attention via Maintained Teacher-Student Ratios",
              "Deep Rooted Focus on Core Moral and Ethical Values"
            ].map((pitch, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                <FaCheckCircle className="text-blue-700 mt-0.5 shrink-0" size={16} />
                <span>{pitch}</span>
              </div>
            ))}
          </div>

          {/* Prospectus Block */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-gray-900 text-sm">Download Institutional Prospectus</h4>
              <p className="text-xs text-gray-500">Contains complete operational charts, legal guidelines, and facility details.</p>
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center gap-2 shadow-sm transition shrink-0">
              <FaDownload size={12}/> Download PDF
            </button>
          </div>
        </div>

      </section>

      {/* Inquiry Form & Quick Support Section */}
      <section className="bg-white border-t border-gray-200 py-16 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          
          {/* Quick Support Context */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><FaEnvelopeOpenText size={20}/></div>
              <h3 className="text-2xl font-bold text-gray-900">Admission Inquiry</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Have specific questions regarding seating metrics, schedules, or document updates? File a rapid digital inquiry form. Our specialized administration division tracks submissions and updates step-by-step queues promptly.
            </p>

            <div className="space-y-4 pt-6 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-700" size={16} />
                <span>Jamalgarh, Punhana, District Nuh (Mewat), Haryana – 122508</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-700" size={14} />
                <span>Available during normal campus business hours</span>
              </div>
            </div>
          </div>

          {/* Core Controlled Form Elements */}
          <div className="md:col-span-3 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Student Name *</label>
                  <input type="text" name="studentName" required value={formData.studentName} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Parent / Guardian Name *</label>
                  <input type="text" name="parentName" required value={formData.parentName} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="Robert Doe" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Mobile Contact *</label>
                  <input type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="98765xxxxx" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Class Seeking Admission *</label>
                  <select name="targetClass" ready="true" required value={formData.targetClass} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700">
                    <option value="">Select Target Class</option>
                    <option value="Nursery">Nursery / Kindergarten</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i+1} value={`Class ${i+1}`}>{`Class ${i+1}`}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="name@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Residential Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="City, Village, District Name" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Detailed Message / Query</label>
                <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-700" placeholder="Write any specific query or secondary request here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200">
                Submit Inquiry Form
              </button>
            </form>
          </div>

        </div>
      </section>


      <Footer/>

    </div>
  );
};

export default Admissions;