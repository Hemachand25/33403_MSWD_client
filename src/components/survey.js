import React, { useState } from 'react';

const Survey = () => {
  const [courseName, setCourseName] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      courseName,
      facultyName,
      communicationSkills,
      remarks,
    };

    setSubmissions([...submissions, newSubmission]);

    // Clear the form fields
    setCourseName('');
    setFacultyName('');
    setCommunicationSkills('');
    setRemarks('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
          .form-container {
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid white;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
            background-color: darkblue;
            color: white;
            margin-top: 50px;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          
          table td, table th {
            padding: 8px;
            text-align: center;
            border: 1px solid white;
          }

          button {
            padding: 8px 16px;
            background-color: white;
            color: darkblue;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }

          button:hover {
            background-color: #e0e0e0;
          }

          input[type="text"] {
            background-color: #444;
            border: 1px solid white;
            color: white;
            padding: 5px;
            border-radius: 5px;
          }

          input[type="radio"] {
            margin: 0 10px;
          }

          label {
            color: white;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Survey/Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="courseName">Course</label></td>
                <td><input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Enter Course" /></td>
              </tr>
              <tr>
                <td><label htmlFor="facultyName">Faculty</label></td>
                <td><input type="text" id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} placeholder="Enter Faculty Name" /></td>
              </tr>
              <tr>
                <td>Rate communication skills</td>
                <td>
                  <label>
                    <input type="radio" name="communicationSkills" value="Very Good" checked={communicationSkills === 'Very Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Very Good
                  </label>
                  <label>
                    <input type="radio" name="communicationSkills" value="Good" checked={communicationSkills === 'Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Good
                  </label>
                  <label>
                    <input type="radio" name="communicationSkills" value="Bad" checked={communicationSkills === 'Bad'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Bad
                  </label>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="remarks">Remarks:</label></td>
                <td><input type="text" id="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter any remarks" /></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {/* Display the submissions */}
      {submissions.length > 0 && (
        <div>
          <h2>SUBMISSIONS</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Faculty</th>
                <th>Communication Skills</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.courseName}</td>
                  <td>{submission.facultyName}</td>
                  <td>{submission.communicationSkills}</td>
                  <td>{submission.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Survey;
