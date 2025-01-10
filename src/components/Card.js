import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ title, image, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
};

export default Card;

