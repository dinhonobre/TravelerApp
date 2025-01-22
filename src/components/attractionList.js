// src/components/AttractionList.js
import React from 'react';

const AttractionList = ({ attractions }) => {
    return (
        <div id="attractions">
        <h2>Attractions</h2>
        <ul>
            {attractions.map((attraction) => (
            <li key={attraction.id}>
                <h3>{attraction.name}</h3>
                <p>Type: {attraction.type}</p>
                <p>Price: {attraction.price}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AttractionList;
