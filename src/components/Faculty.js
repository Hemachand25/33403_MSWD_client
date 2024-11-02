import React from 'react';

const Faculty = () => {
  return (
    <div className="card-container" style={styles.cardContainer}>
      <div className="cardborder" style={styles.card}>
        <div className="card-body" style={styles.cardBody}>
          <h4 className="card-title" style={styles.cardTitle}>Dr. Priya</h4>
          <p className="card-text" style={styles.cardText}>ID: 1224</p>
          <p className="card-text" style={styles.cardText}>Dept: CSE-H</p>
          <p className="card-text" style={styles.cardText}>Designation: Professor</p>
        </div>
      </div>

      <div className="cardborder" style={styles.card}>
        <div className="card-body" style={styles.cardBody}>
          <h4 className="card-title" style={styles.cardTitle}>Dr. Murali Mohan</h4>
          <p className="card-text" style={styles.cardText}>ID: 3340</p>
          <p className="card-text" style={styles.cardText}>Dept: IOT</p>
          <p className="card-text" style={styles.cardText}>Designation: Professor</p>
        </div>
      </div>

      <div className="cardborder" style={styles.card}>
        <div className="card-body" style={styles.cardBody}>
          <h4 className="card-title" style={styles.cardTitle}>Dr. Monika</h4>
          <p className="card-text" style={styles.cardText}>ID: 3318</p>
          <p className="card-text" style={styles.cardText}>Dept: ECE</p>
          <p className="card-text" style={styles.cardText}>Designation: Professor</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
  card: {
    border: '1px solid grey',
    borderRadius: '8px',
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  cardBody: {
    padding: '10px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: 'lightgrey',
    marginBottom: '5px',
  },
};

export default Faculty;
