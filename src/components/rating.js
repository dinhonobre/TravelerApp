// src/components/Rating.js
import React, { useState } from 'react';

const Rating = ({ attractionId, onAddRating }) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRating(attractionId, rating);
    };

    return (
        <div className="rating-container">
        <h3>Rate this attraction</h3>
        <form onSubmit={handleSubmit}>
            <label>
            Select a rating:
            <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Select</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
            </select>
            </label>
            <button type="submit">Submit Rating</button>
        </form>
        </div>
    );
};

export default Rating;
