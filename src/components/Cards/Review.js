import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="border p-3 mb-3">
      <h4>{review.title}</h4>
      <p>{review.content}</p>
      <p>Оценка: {review.rating}/5</p>
    </div>
  );
};

export default Review;
