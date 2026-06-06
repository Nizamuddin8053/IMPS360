import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock, User, Loader2, Calendar, Clock } from "lucide-react";

// Quick time/date hook for the premium footer touch
const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return dateTime;
};

const Login = ()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dateTime = useDateTime();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError("");
    
    // Simulate API Call to /api/auth/login
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form Submitted:", data);
      
      // Mocking backend response structure: { token, role }
      const mockResponse = { token: "xyz123", role: "admin" }; 
      
      alert(`Logged in successfully as ${mockResponse.role}!`);
      // Here you would handle: switch(role) { navigate(...) }
    } catch (err) {
      setLoginError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-950 font-sans selection:bg-emerald-500 selection:text-slate-900 overflow-hidden relative">
      
      {/* BACKGROUND FLOATING PARTICLES EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* LEFT SIDE: BRANDING & HERO */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden border-r border-slate-800">
        {/* Dynamic Animated Gradient Overlay over Simulated Campus Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80')` 
          }}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-slate-950 via-slate-900/90 to-emerald-950/40 mix-blend-multiply" />
        
        {/* Branding Content */}
        <div className="relative z-10 max-w-md text-left flex flex-col justify-between h-full py-12">
          {/* Logo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-12 w-12 rounded-xl bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-white font-black text-xl tracking-wider">IM</span>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block">ERP Portal</span>
            </div>
          </motion.div>

          {/* Core Typography */}
          <div className="my-auto space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight"
            >
              ISMAIL MEMORIAL <br />
              <span className="bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                PUBLIC SCHOOL
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 font-medium text-lg leading-relaxed max-w-sm"
            >
              Excellence Through Education. Empowering future leaders with modern knowledge ecosystems.
            </motion.p>
          </div>

          {/* Live System Time / Date */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-6 text-xs font-mono text-slate-500 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800/50 w-fit"
          >
            <span className="flex items-center gap-1.5"><Calendar size={14}/> {dateTime.toLocaleDateString()}</span>
            <span className="flex items-center gap-1.5"><Clock size={14}/> {dateTime.toLocaleTimeString()}</span>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: GLASSMORPHISM LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl relative group"
        >
          {/* Subtle neon glow on card top border */}
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-sm mt-1">Please enter your school portal credentials.</p>
          </div>

          {/* Error Feedbacks */}
          {loginError && (
            <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-lg font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Identifier Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Admission No. / Employee ID / Email
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within/input:text-emerald-400 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="e.g. IMPS-2026-0891"
                  {...register("identifier", { required: "This field is required" })}
                  className="w-full pl-11 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-medium text-sm"
                />
              </div>
              {errors.identifier && (
                <span className="text-rose-400 text-xs font-medium">{errors.identifier.message}</span>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Password
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within/input:text-emerald-400 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  {...register("password", { required: "Password is required" })}
                  className="w-full pl-11 pr-11 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-medium text-sm tracking-widest"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-rose-400 text-xs font-medium">{errors.password.message}</span>
              )}
            </div>

            {/* Remember Me & Forgot Password links */}
            <div className="flex items-center justify-between text-xs font-medium pt-1">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-emerald-500 focus:ring-0 accent-emerald-500"
                />
                Keep me signed in
              </label>
              <a href="#forgot" className="text-emerald-400 hover:text-emerald-300 transition-colors tracking-wide">
                Forgot Password?
              </a>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 relative flex items-center justify-center py-3 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-emerald-500/10 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.span 
                    key="loader"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Loader2 className="animate-spin" size={18} />
                    Signing you in...
                  </motion.span>
                ) : (
                  <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Sign In to Portal
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          {/* Premium Animated Quote Touch */}
          <div className="mt-8 border-t border-slate-800/60 pt-4 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-[11px] italic font-medium tracking-wide text-slate-400 max-w-xs mx-auto"
            >
              "Education is the passport to the future."
            </motion.p>
          </div>
        </motion.div>

        {/* Footer for mobile/tablet contexts that don't display left banner */}
        <div className="lg:hidden mt-8 flex items-center gap-4 text-[10px] font-mono text-slate-600">
          <span>{dateTime.toLocaleDateString()}</span>
          <span>•</span>
          <span>{dateTime.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}

export default Login;