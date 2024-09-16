// ResumeBuilder.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // For table support in jsPDF
import './ResumeBuilder.css'; // Create a CSS file for styling

function ResumeBuilder({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
    skills: '',
    experience: '',
    email: '',
    hobbies: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${formData.name}`, 10, 10);
    doc.text(`Age: ${formData.age}`, 10, 20);
    doc.text(`Gender: ${formData.gender}`, 10, 30);
    doc.text(`Date of Birth: ${formData.dob}`, 10, 40);
    doc.text(`Skills: ${formData.skills}`, 10, 50);
    doc.text(`Experience: ${formData.experience}`, 10, 60);
    doc.text(`Email: ${formData.email}`, 10, 70);
    doc.text(`Hobbies: ${formData.hobbies}`, 10, 80);
    doc.text(`Education: ${formData.education}`, 10, 90);
    doc.save(`${formData.name}_Resume.pdf`);
    onClose();
  };

  return (
    <div className="resume-builder">
      <div className="dialog">
        {/* Close button in the top-right corner */}
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>Resume Builder</h2>
        <form>
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-group">
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="button-group">
            <button type="button" onClick={handleSubmit}>Generate Resume</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeBuilder;
