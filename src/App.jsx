import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Teachers from './pages/Teachers';
import AddTeacher from './pages/AddTeacher';
import TeacherDetail from './pages/TeacherDetail';

function App() {
  // LocalStorage dan ma'lumotlarni o'qish
  const [teachers, setTeachers] = useState(() => {
    const savedData = localStorage.getItem('school_teachers_data');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Har safar teachers o'zgarganda LocalStorage ga yozish
  useEffect(() => {
    localStorage.setItem('school_teachers_data', JSON.stringify(teachers));
  }, [teachers]);

  // Yangi teacher qo'shish
  const handleAddTeacher = (newTeacher) => {
    const teacherWithId = { ...newTeacher, id: Date.now().toString() };
    setTeachers([...teachers, teacherWithId]);
  };

  // Teacherni o'chirish
  const handleDeleteTeacher = (id) => {
    if (window.confirm("Haqiqatdan ham o'chirmoqchimisiz?")) {
      const updatedTeachers = teachers.filter(t => t.id !== id);
      setTeachers(updatedTeachers);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/teachers" replace />} />
        <Route 
          path="teachers" 
          element={<Teachers teachers={teachers} onDelete={handleDeleteTeacher} />} 
        />
        <Route 
          path="teachers/add" 
          element={<AddTeacher onAdd={handleAddTeacher} />} 
        />
        <Route 
          path="teachers/:id" 
          element={<TeacherDetail teachers={teachers} />} 
        />
        
        {/* Placeholder sahifalar */}
        <Route path="dashboard" element={<div className="p-10 text-2xl font-bold">Dashboard</div>} />
        <Route path="students" element={<div className="p-10 text-2xl font-bold">Students</div>} />
        <Route path="billing" element={<div className="p-10 text-2xl font-bold">Billing</div>} />
        <Route path="settings" element={<div className="p-10 text-2xl font-bold">Settings</div>} />
        <Route path="exams" element={<div className="p-10 text-2xl font-bold">Exams</div>} />
      </Route>
    </Routes>
  );
}

export default App;