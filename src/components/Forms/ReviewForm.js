import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ReviewForm = ({ onAddReview }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddReview = () => {
    if (title && content && rating >= 1 && rating <= 5) {
      const newReview = {
        title,
        content,
        rating: parseInt(rating, 10),
      };

      onAddReview(newReview);

      setTitle('');
      setContent('');
      setRating(0);
    } else {
      alert('Please fill in all fields and provide a valid rating (1-5).');
    }
  };

  return (
    <div className="border p-3 mb-3">
      <h4>Оставьте свой отзыв</h4>
      <Form>
        <Form.Group controlId="formReviewTitle">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control type="text" placeholder="Введите заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formReviewContent">
          <Form.Label>Отзыв</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Введите отзыв" value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formReviewRating">
          <Form.Label>Оценка (1-5)</Form.Label>
          <Form.Control type="number" placeholder="Введите оценку" value={rating} onChange={(e) => setRating(e.target.value)} />
        </Form.Group>
        <div className="mt-3">
          <Button variant="primary" onClick={handleAddReview}>
            Добавить отзыв
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewForm;
