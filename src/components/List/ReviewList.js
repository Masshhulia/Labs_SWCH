import React from 'react';
import Review from '../Cards/Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h4>Отзывы пользователей</h4>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
