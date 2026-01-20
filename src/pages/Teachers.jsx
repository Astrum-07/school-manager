import React, { useState } from 'react';
import { Search, Trash2, Eye } from 'lucide-react'; // Trash2 va Eye ikonkalari
import { useNavigate } from 'react-router-dom';

const Teachers = ({ teachers, onDelete }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = teachers.filter(t => 
    t.fullName.toLowerCase().includes(search.toLowerCase()) ||
    t.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
        <button 
          onClick={() => navigate('/teachers/add')} 
          className="bg-[#4a90e2] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-md"
        >
          Add Teachers
        </button>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search for a teachers by name or email"
          className="w-full bg-gray-50 border-none rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm font-bold bg-white">
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Subject</th>
                <th className="px-6 py-5">Class</th>
                <th className="px-6 py-5">Email address</th>
                <th className="px-6 py-5">Gender</th>
                <th className="px-6 py-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr 
                  key={t.id} 
                  className={`${i % 2 !== 0 ? 'bg-[#f8faff]' : 'bg-white'} hover:bg-blue-50/50 transition-colors group`}
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img 
                      src={t.avatar || 'https://via.placeholder.com/40'} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-100" 
                      alt="" 
                    />
                    <span className="font-semibold text-gray-800">{t.fullName}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{t.subject}</td>
                  <td className="px-6 py-4 text-gray-600">{t.classRoom}</td>
                  <td className="px-6 py-4 text-gray-600">{t.email}</td>
                  <td className="px-6 py-4 text-gray-600">{t.gender}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => navigate(`/teachers/${t.id}`)}
                        className="text-gray-400 hover:text-blue-500 p-1"
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Qatorga bosilganda Detail sahifasiga o'tib ketmasligi uchun
                          onDelete(t.id);
                        }}
                        className="text-gray-400 hover:text-red-500 p-1"
                        title="Delete teacher"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Empty State (Koala) */
        <div className="flex flex-col items-center justify-center mt-16 text-center animate-fade-in">
          <div className="relative mb-6">
             <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" alt="No data" className="w-72 opacity-80" />
             <div className="absolute -top-4 -right-2 flex flex-col text-gray-400 font-serif italic text-2xl animate-bounce">
                <span>Z</span><span className="ml-3">Z</span><span className="ml-6">Z</span>
             </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Teachers at this time</h3>
          <p className="text-gray-500 max-w-sm">
             {search ? `No results found for "${search}"` : "Teachers will appear here after they enroll in your school."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Teachers;