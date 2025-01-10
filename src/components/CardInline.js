
import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  textAlign: 'center',
  width: '300px',
  margin: '16px auto',
  backgroundColor: '#fff',
};

const imgStyle = {
  maxWidth: '100%',
  borderRadius: '8px',
};

const h2Style = {
  margin: '8px 0',
  fontSize: '24px',
};

const pStyle = {
  fontSize: '16px',
  color: '#555',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
};

const CardInline = ({ title, image, description }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <h2 style={h2Style}>{title}</h2>
      <p style={pStyle}>{description}</p>
      <button style={buttonStyle}>Read More</button>
    </div>
  );
};

export default CardInline;
