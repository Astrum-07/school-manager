import React from 'react';
import { useParams } from 'react-router-dom';
import { GraduationCap, Phone, Mail } from 'lucide-react';

const TeacherDetail = ({ teachers }) => {
  const { id } = useParams();
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) return <div className="p-10 text-center">Ma'lumot topilmadi.</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Chap qism: Rasm (Perfect Circle) */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={teacher.avatar || 'https://via.placeholder.com/300'} 
              className="w-full h-full object-cover" 
              alt={teacher.fullName} 
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-1">{teacher.fullName}</h2>
          <p className="text-gray-400 text-sm mb-6">{teacher.email}</p>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 cursor-pointer">
              <GraduationCap size={24} />
            </div>
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 cursor-pointer">
              <Phone size={24} />
            </div>
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 cursor-pointer">
              <Mail size={24} />
            </div>
          </div>
        </div>

        {/* O'ng qism: Ma'lumotlar */}
        <div className="flex-1 w-full lg:max-w-md">
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-3">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {teacher.about || "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-10">
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1">Subject</p>
              <p className="text-gray-400 text-sm">{teacher.subject}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1">Class</p>
              <p className="text-gray-400 text-sm">{teacher.classRoom}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1">Age</p>
              <p className="text-gray-400 text-sm">{teacher.age}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1">Gender</p>
              <p className="text-gray-400 text-sm">{teacher.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;