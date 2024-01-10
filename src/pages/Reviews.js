import React, { useState } from 'react';
import ReviewForm from '../components/Forms/ReviewForm';
import ReviewList from '../components/List/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h2>Отзывы</h2>
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
