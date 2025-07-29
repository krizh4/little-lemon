import React from 'react'

const ConfirmationPage = ({ reservation }) => {
  if (!reservation) {
    return <p>No reservation data available.</p>;
  }

  const { date, time, guests, occasion } = reservation;

  return (
    <div style={styles.container}>
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for your reservation. Here are your details:</p>
      <ul style={styles.list}>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time:</strong> {time}</li>
        <li><strong>Guests:</strong> {guests}</li>
        <li><strong>Occasion:</strong> {occasion}</li>
      </ul>
      <p>We look forward to seeing you!</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#e0ffe0",
    boxShadow: "0 4px 12px rgba(0, 128, 0, 0.2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
};

export default ConfirmationPage