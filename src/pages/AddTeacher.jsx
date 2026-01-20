import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTeacher = ({ onAdd }) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '', email: '', subject: '', 
    classRoom: '', gender: '', age: '', about: '', avatar: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Rasmni tanlaganda uni Base64 formatiga o'tkazish
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return alert("Please fill important fields");
    onAdd(formData);
    navigate('/teachers');
  };

  const inputStyle = "w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-400 transition-all text-gray-700 bg-white";
  const labelStyle = "block text-gray-500 text-sm font-medium mb-1";

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold text-gray-800">Add teacher</h1>
        <button onClick={handleSubmit} className="bg-[#4a90e2] text-white px-10 py-2 rounded-lg font-medium hover:bg-blue-600 shadow-sm">
          Save
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="space-y-6">
          <div><label className={labelStyle}>Full Name</label><input name="fullName" placeholder="Full Name" className={inputStyle} onChange={handleChange} /></div>
          <div><label className={labelStyle}>Email address</label><input name="email" type="email" placeholder="Email address" className={inputStyle} onChange={handleChange} /></div>
          <div><label className={labelStyle}>Subject</label>
            <select name="subject" className={inputStyle} onChange={handleChange}>
              <option value="">Subject</option>
              <option value="Chemistry">Chemistry</option>
              <option value="French">French</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
            </select>
          </div>
          <div><label className={labelStyle}>About</label><textarea name="about" rows="4" placeholder="About" className={inputStyle} onChange={handleChange}></textarea></div>
        </div>

        <div className="space-y-6">
          <div><label className={labelStyle}>Class</label><input name="classRoom" placeholder="Class (e.g. J SS 2)" className={inputStyle} onChange={handleChange} /></div>
          <div><label className={labelStyle}>Gender</label>
            <select name="gender" className={inputStyle} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div><label className={labelStyle}>Age</label><input name="age" type="number" placeholder="Age" className={inputStyle} onChange={handleChange} /></div>
          
          <div className="pt-4">
            <p className={labelStyle}>Import Img</p>
            <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-all h-32 overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-full object-cover" />
              ) : (
                <span className="text-gray-400">Click to upload image</span>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;