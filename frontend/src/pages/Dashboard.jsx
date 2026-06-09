import DASHBOARD_CONFIGS from "../utils/Dashboard_Configs";
import Navbar from "../header/Navbar";
import React, { useState } from 'react';

import { 
  UserPlus, Users, GraduationCap, Calendar, CheckSquare, 
  FileText, CreditCard, Bell, Image, Settings, LogOut, 
  Menu, X, RefreshCw, UserCheck, ShieldAlert, Award, FileSpreadsheet
} from 'lucide-react';

const Dashboard = ()=>{
  // Simulating active authenticated role: Switch to 'FACULTY', 'STUDENT', or 'PARENT' to see structural transformation
  const [currentRole, setCurrentRole] = useState('ADMIN'); 
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notification, setNotification] = useState('');


  const config = DASHBOARD_CONFIGS[currentRole];

  // Utility to style buttons adaptively based on intended action severity 
  const getButtonStyles = (variant) => {
    const base = "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md ";
    switch (variant) {
      case "primary": return base + "bg-indigo-600 hover:bg-indigo-700 text-white hover:-translate-y-0.5";
      case "secondary": return base + "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300";
      case "success": return base + "bg-emerald-600 hover:bg-emerald-700 text-white hover:-translate-y-0.5";
      case "warning": return base + "bg-amber-500 hover:bg-amber-600 text-white hover:-translate-y-0.5";
      case "danger": return base + "bg-rose-600 hover:bg-rose-700 text-white hover:-translate-y-0.5 animate-pulse hover:animate-none";
      default: return base + "bg-indigo-600 text-white";
    }
  };

  const handleActionTrigger = (actionName) => {
    setNotification(`API Endpoint Triggered for: "${actionName}"`);
    setTimeout(() => setNotification(''), 4000);
  };

  const logOutHandler = ()=>{
    
  }

  return (

    // container
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* ── TOP HEADER BAR ── */}
      <Navbar isLoggedIn={true} />

      {/* Main Body Grid Structure */}
      <div className="flex flex-1 relative">
        


        {/* ── LEFT SIDEBAR (PANEL) ── */}
        <aside className={`
          fixed inset-y-16 left-0 z-30 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out border-r border-slate-800 flex flex-col justify-between
          md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>

          {/* all navigation button here */}
          <div className="py-4 overflow-y-auto px-3 space-y-1 scrollbar-thin scrollbar-thumb-slate-800">

            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Navigation Menu</p>

            {/* map each sidebar with clickable button */}
            {config.sidebar.map((item) => (
              
              // each button in sidebar
              <button
                key={item}
                onClick={() => { setActiveTab(item); setSidebarOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 group ${
                  activeTab === item 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10 font-semibold' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <span>{item}</span>
                {activeTab === item && <div className="h-2 w-2 rounded-full bg-white shadow-glow" />}
              </button>
            ))}
          </div>

        </aside>

        {/* Overlay context background for mobile layouts */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 top-16 z-20 bg-slate-950/60 backdrop-blur-xs md:hidden" 
          />
        )}


        {/* ── RIGHT HAND CONTENT DASHBOARD WINDOW ── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8 overflow-x-hidden">
          
          {/* Toast Notification Alert Box */}
          {notification && (
            <div className="fixed top-20 right-4 z-50 bg-slate-900 border-l-4 border-emerald-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 animate-slide-in">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-sm font-medium tracking-wide">{notification}</p>
            </div>
          )}

          {/* Tab Route Identity Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{activeTab} Section</h1>
              <p className="text-sm text-slate-500 mt-1">
                Viewing functional tools categorized under your system access role.
              </p>
            </div>

            <div className="text-xs text-slate-400 font-medium italic bg-white border px-3 py-1.5 rounded-lg shadow-2xs self-start sm:self-center">
              Logged in authorization: <span className="font-bold text-indigo-600">{currentRole}</span>
            </div>
          </div>

          {/* Conditional Display Block: Only load analytical charts and full control grids on the main Overview view tab */}
          {activeTab === 'Overview' ? (
            <>
              {/* Dynamic Metrics Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {config.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                  >
                    <div className={`absolute top-0 inset-x-0 h-1 bg-linear-to-r ${metric.color}`} />
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {metric.count}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md w-max">
                      <span>{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Functional Interactive Activity Cards Area */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Interactive Operation Modules</h2>
                    <p className="text-xs sm:text-sm text-slate-500">Click specific workflow hooks to run state controllers.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {config.cards.map((card, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-indigo-200"
                    >
                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {card.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-950 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Action Interface Grid Footer */}
                      <div className="bg-slate-50/70 px-5 py-4 sm:px-6 border-t border-slate-100 flex flex-wrap gap-2.5">
                        {card.actions.map((btn, bIdx) => {
                          const IconComponent = btn.icon;
                          return (
                            <button
                              key={bIdx}
                              onClick={() => handleActionTrigger(btn.name)}
                              className={getButtonStyles(btn.variant)}
                            >
                              <IconComponent size={15} />
                              <span>{btn.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Non-Overview Route Mock State Area for other Panel views */
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs border-dashed flex flex-col items-center justify-center space-y-4">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-full animate-pulse">
                <FileText size={32} />
              </div>
              <div className="max-w-md">
                <h3 className="text-lg font-bold text-slate-900">Sub-Route Endpoint Workspace</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  This pane displays full table indices and specialized query logic forms matching the 
                  <span className="font-semibold text-indigo-600"> {activeTab}</span> component configuration settings.
                </p>
              </div>
              <button 
                onClick={() => handleActionTrigger(`Generic trigger inside ${activeTab}`)}
                className="mt-2 bg-slate-900 text-white font-medium text-xs px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Execute Module Test
              </button>
            </div>
          )}

          
        </main>


      </div>
    </div>
  );
}


export default Dashboard;