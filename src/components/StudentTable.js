import React from 'react'
import PresenceButton from './PresenceButton'

const students = [
    { id: '2300032536', name: 'P.Hemachand', branch: 'CSE', year: '2nd' },
    { id: '2300033185', name: 'V.Likitha', branch: 'CSE', year: '2nd' },
    { id: '2300030036', name: 'G. Priya', branch: 'CSE', year: '2nd' },
    { id: '2300030254', name: 'V. Niharika', branch: 'CSE', year: '2nd' },
    { id: '2300012345', name: 'P. Dhawan', branch:'CSE', year: '2nd'},
    { id: '2300043562', name: 'G. Preethi', branch:'ECE', year: '2nd'},
  ];
  
  
const StudentTable = () => {
    return (
        <div className="card-container">
          {students.map((student, index) => (
            <div key={index} className="cardborder">
              <div className="card-body">
                <h4 className="card-title">Name: {student.name}</h4>
                <p className="card-text">ID: {student.id}</p>
                <p className="card-text">Dept: {student.branch}</p>
                <p className="card-text">Year: {student.year}</p>
                <p className="card-text">
                  <PresenceButton key={index + 'presence'} student={student} />
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default StudentTable