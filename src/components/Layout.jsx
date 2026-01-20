import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X, Bell } from 'lucide-react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Overlay (Mobilda sidebar ochiqligida fonni qoraytirish) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Konteyneri */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#151b4d] transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar closeMobileMenu={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Asosiy qism */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          {/* Bars tugmasi - faqat mobilda ko'rinadi */}
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-600">
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="flex items-center gap-6 ml-auto">
            <button className="text-gray-400 relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-gray-700 font-semibold text-sm">Log out</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;