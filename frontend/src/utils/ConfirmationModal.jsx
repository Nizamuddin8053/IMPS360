
import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone. Please confirm if you want to proceed.",
  confirmLabel = "Confirm",
  variant = "danger" // options: 'danger' (red), 'warning' (yellow), 'primary' (blue)
}) => {
  
  // If the modal state is closed, render absolutely nothing
  if (!isOpen) return null;

  // Determine button background colors dynamically based on the variant prop
  const variantStyles = {
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white",
    warning: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500 text-white",
    primary: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      
      {/* 1. Backdrop Blur Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose} // Closes modal if the user clicks outside the box
      />

      {/* 2. Modal Box Content Area */}
      <div className="relative w-full max-w-md mx-4 bg-white rounded-xl shadow-glow border border-slate-100 p-6 z-10 transform scale-100 transition-all animate-slide-in">
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50"
        >
          <X size={18} />
        </button>

        {/* Header Layout with Context Icon */}
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-full shrink-0 ${
            variant === 'danger' ? 'bg-red-50 text-red-600' : 
            variant === 'warning' ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'
          }`}>
            <AlertTriangle size={22} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 leading-6">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        {/* Action Buttons Layout Block */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="button"
            onClick={() => {
              onConfirm(); // Fire parent execution function
              onClose();   // Dismiss the modal overlay
            }}
            className={`px-4 py-2 text-sm font-medium rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${variantStyles[variant]}`}
          >
            {confirmLabel}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmationModal;