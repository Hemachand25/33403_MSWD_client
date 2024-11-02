import React from 'react';

const course = [
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
];

const Courses = () => {
  return (
    <div className="card-container" style={styles.cardContainer}>
      {course.map((course, index) => (
        <div key={index} className="cardborder" style={styles.card}>
          <div className="card-body" style={styles.cardBody}>
            <h4 className="card-title" style={styles.cardTitle}>Course Code: {course.coursecode}</h4>
            <p className="card-text" style={styles.cardText}>Course Title: {course.coursetitle}</p>
            <p className="card-text" style={styles.cardText}>L-T-P-S: {course.ltps}</p>
            <p className="card-text" style={styles.cardText}>Credits: {course.credits}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20px',
    overflow: 'hidden', // To hide the cards when they fly out of the container
  },
  card: {
    border: '1px solid grey',
    borderRadius: '8px',
    margin: '10px',
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '20px',
    width: '250px',
    height: '150px',
    animation: 'fly 3s infinite ease-in-out',
  },
  cardBody: {
    padding: '10px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
  },
  cardText: {
    fontSize: '16px',
    color: 'lightgrey',
  },
  '@keyframes fly': {
    '0%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(-50vw) rotate(-5deg)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
};

export default Courses;
