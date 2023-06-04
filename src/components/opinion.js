import React, { useState } from 'react';

const Star = ({ filled, onClick }) => {
  const starStyle = {
    cursor: 'pointer',
    color: filled ? 'gold' : 'white',
    fontSize: '24px',
    
  };

  return <span onClick={onClick} style={starStyle}>★</span>;
};

const Rating = ({ rating, onStarClick }) => {
  return (
    <div className="rating">
      {rating.map((filled, index) => (
        <Star
          key={index}
          filled={filled}
          onClick={() => onStarClick(index)}
        />
      ))}
    </div>
  );
};

export default function Opinion({ title, description, evento, opinion, reseña}) {
  const [rating, setRating] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const updatedRating = rating.map((filled, i) => (i <= index ? true : false));
    setRating(updatedRating);
  };

  return (
    <div id="cont" className="grid gap-4 grid-cols-2" style={{
      width: "40vw",
      justifyContent: "center",
      backgroundColor: "gray",
      marginLeft: "4px",
      marginRight: "4px",
      padding: "12px",
    }}>
      <div className="izquierda" style={{ width: "40vw", justifySelf: "left" }}>
        <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="derecha" style={{ width: "40vw", justifySelf: "right" }}>
        <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>{evento}</h1>
        <p>{opinion}</p>
      </div>
      <div className="text-sm text-white-500">
            <span>{reseña}</span>
          </div>
      <Rating rating={rating} onStarClick={handleStarClick} />
    </div>
  );
}
