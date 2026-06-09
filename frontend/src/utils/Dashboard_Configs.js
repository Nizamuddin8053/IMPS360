import React, { useState } from 'react';
import { 
  UserPlus, Users, GraduationCap, Calendar, CheckSquare, 
  FileText, CreditCard, Bell, Image, Settings, LogOut, 
  Menu, X, RefreshCw, UserCheck, ShieldAlert, Award, FileSpreadsheet
} from 'lucide-react';

// Configuration representing capabilities tied directly to your backend architecture
const DASHBOARD_CONFIGS = {
  ADMIN: {
    title: "Administrator Portal",
    metrics: [
      { label: "Total Students", count: "1,240", change: "+4% this month", color: "from-blue-500 to-indigo-600" },
      { label: "Active Faculty", count: "84", change: "Fully Staffed", color: "from-emerald-500 to-teal-600" },
      { label: "Daily Attendance", count: "96.2%", change: "Target: >95%", color: "from-amber-500 to-orange-600" },
      { label: "Pending Fees Collection", count: "$14,250", change: "Due by Friday", color: "from-rose-500 to-pink-600" }
    ],
    sidebar: ["Overview", "Students", "Faculty", "Attendance", "Results", "Fees", "Notices", "Events", "Gallery", "Website Content", "Settings"],
    cards: [
      {
        category: "Students",
        title: "Student Roster & Lifecycle",
        description: "Manage admissions, change sections internally, or handle exit clearance configurations.",
        actions: [
          { name: "Add New Student", icon: UserPlus, variant: "primary" },
          { name: "View All Profiles", icon: Users, variant: "secondary" },
          { name: "Transfer Student / Issue TC", icon: RefreshCw, variant: "danger" },
          { name: "Bulk Class Promotion", icon: GraduationCap, variant: "warning" }
        ]
      },
      {
        category: "Faculty",
        title: "Faculty Staff Registry",
        description: "Onboard new teaching staff, manage departmental allocations, and adjust system permissions.",
        actions: [
          { name: "Add Faculty Member", icon: UserPlus, variant: "primary" },
          { name: "Update Staff Records", icon: Settings, variant: "secondary" },
          { name: "Manage Class Teachers", icon: UserCheck, variant: "success" }
        ]
      },
      {
        category: "Operations",
        title: "Institutional Control",
        description: "Oversee broad cross-sectional schedules, fee tracking structures, and institutional updates.",
        actions: [
          { name: "Configure Fee Structure", icon: CreditCard, variant: "primary" },
          { name: "Publish Global Noticeboard", icon: Bell, variant: "warning" },
          { name: "Emergency System Lockout", icon: ShieldAlert, variant: "danger" }
        ]
      }
    ]
  },
  FACULTY: {
    title: "Faculty Dashboard",
    metrics: [
      { label: "Assigned Classes", count: "4", change: "Grade 9 & 10", color: "from-indigo-500 to-purple-600" },
      { label: "My Students", count: "142", change: "Across 3 Sections", color: "from-cyan-500 to-blue-600" },
      { label: "Attendance Submitted", count: "100%", change: "Today Completed", color: "from-emerald-500 to-teal-600" },
      { label: "Pending Evaluations", count: "28", change: "Mid-Term Exam papers", color: "from-fuchsia-500 to-rose-600" }
    ],
    sidebar: ["Profile", "My Classes", "Attendance", "Results", "Notices", "Students"],
    cards: [
      {
        category: "Students",
        title: "Classroom Directory & Intake",
        description: "Perform fast intake setups or map direct student linkages on your personal dashboard.",
        actions: [
          { name: "Register Student Profile", icon: UserPlus, variant: "primary" },
          { name: "Register Parent Account", icon: Users, variant: "success" },
          { name: "Fetch Class Roster", icon: FileSpreadsheet, variant: "secondary" }
        ]
      },
      {
        category: "Academic Records",
        title: "Performance & Tracking",
        description: "Record student milestones, mark present/absent statuses, and issue classroom alerts.",
        actions: [
          { name: "Take Daily Attendance", icon: CheckSquare, variant: "primary" },
          { name: "Upload Gradebook Scores", icon: Award, variant: "warning" },
          { name: "Post Class Notice", icon: Bell, variant: "secondary" }
        ]
      }
    ]
  },
  STUDENT: {
    title: "Student Academic Dashboard",
    metrics: [
      { label: "Your Attendance Rate", count: "94.8%", change: "Good Standing", color: "from-emerald-500 to-teal-600" },
      { label: "Current GPA", count: "3.84 / 4.0", change: "Top 10% of Class", color: "from-blue-500 to-indigo-600" },
      { label: "Active Circulars", count: "3 New", change: "Check Noticeboard", color: "from-amber-500 to-orange-600" },
      { label: "Current Balance", count: "$0.00", change: "Paid (Receipt #402)", color: "from-purple-500 to-pink-600" }
    ],
    sidebar: ["Profile", "Attendance", "Results", "Fees", "Notices", "Documents"],
    cards: [
      {
        category: "Academic Hub",
        title: "My Progress & Submissions",
        description: "Access your report histories, daily attendance percentages, and dynamic class materials.",
        actions: [
          { name: "View Complete Report Card", icon: Award, variant: "primary" },
          { name: "Track Attendance History", icon: Calendar, variant: "secondary" },
          { name: "Download Identity Documents", icon: FileText, variant: "success" }
        ]
      },
      {
        category: "Finances & Information",
        title: "Administrative Utilities",
        description: "Verify your profile variables or execute instant processing of semester clearings.",
        actions: [
          { name: "View Payment Receipts", icon: CreditCard, variant: "secondary" },
          { name: "Check Live Notice Board", icon: Bell, variant: "warning" }
        ]
      }
    ]
  },
  PARENT: {
    title: "Parent Portal",
    metrics: [
      { label: "Children Enrolled", count: "2 Students", change: "Linked Profiles", color: "from-purple-500 to-indigo-600" },
      { label: "Avg Class Attendance", count: "97.1%", change: "Excellent", color: "from-emerald-500 to-teal-600" },
      { label: "Term Fees Outstanding", count: "$450.00", change: "Due on 15th", color: "from-rose-500 to-red-600" },
      { label: "Upcoming PTM Meet", count: "June 12", change: "4:00 PM Slot Scheduled", color: "from-amber-500 to-orange-600" }
    ],
    sidebar: ["Child Profile", "Attendance", "Results", "Fee Details", "Notices"],
    cards: [
      {
        category: "Ward Oversight",
        title: "Academic & Attendance Portals",
        description: "Track performance variables, view real-time entry registers, and cross-examine marks files.",
        actions: [
          { name: "View Child Academic Progress", icon: Award, variant: "primary" },
          { name: "Review Full Attendance Log", icon: Calendar, variant: "secondary" },
          { name: "Contact Assigned Teachers", icon: Users, variant: "success" }
        ]
      },
      {
        category: "Billing & Updates",
        title: "Financial Ledger & School News",
        description: "Clear pending registration balances or stay informed regarding public mandates.",
        actions: [
          { name: "Pay Outstanding School Fees", icon: CreditCard, variant: "danger" },
          { name: "Read Principal Announcements", icon: Bell, variant: "warning" }
        ]
      }
    ]
  }
};

export default DASHBOARD_CONFIGS;