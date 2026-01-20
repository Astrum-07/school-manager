import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, CreditCard, Settings, FileText, Gift, ChevronRight } from 'lucide-react';

const Sidebar = ({ closeMobileMenu }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Teachers', path: '/teachers', icon: <Users size={20} /> },
    { name: 'Students', path: '/students', icon: <GraduationCap size={20} /> },
    { name: 'Billing', path: '/billing', icon: <CreditCard size={20} /> },
    { name: 'Settings and profile', path: '/settings', icon: <Settings size={20} /> },
    { name: 'Exams', path: '/exams', icon: <FileText size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col py-6">
      <div className="flex flex-col items-center mb-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
        </div>
        <h2 className="text-white text-sm font-semibold">Udemy Inter. school</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMobileMenu} // Link bosilganda mobilda sidebar yopiladi
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                isActive ? 'bg-[#4a90e2] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-medium flex-1">{item.name}</span>
            {item.name === 'Teachers' && <ChevronRight size={14} className="opacity-50" />}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <div className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg cursor-pointer">
          <div className="flex items-center gap-4">
            <Gift size={20} />
            <span className="text-sm">Features</span>
          </div>
          <span className="bg-[#4a90e2] text-white text-[10px] px-2 py-0.5 rounded font-bold">NEW</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;