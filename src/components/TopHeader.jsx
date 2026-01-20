import React from 'react';
import { Bell } from 'lucide-react';

const TopHeader = () => {
  return (
    <header className="h-16 flex items-center justify-end px-8 bg-transparent">
      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-blue-500 relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="text-gray-700 font-semibold text-sm hover:underline">
          Log out
        </button>
      </div>
    </header>
  );
};

export default TopHeader;