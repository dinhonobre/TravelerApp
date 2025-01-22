// src/components/AttractionFilter.js
import React, { useState } from 'react';

    const AttractionFilter = ({ onFilterChange }) => {
    const [type, setType] = useState(''); // Armazena o tipo de atração
    const [price, setPrice] = useState(''); // Armazena o preço da atração

    const handleTypeChange = (event) => {
        setType(event.target.value); // Atualiza o tipo
        onFilterChange(event.target.value, price); // Chama a função de filtro
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value); // Atualiza o preço
        onFilterChange(type, event.target.value); // Chama a função de filtro
    };

    return (
        <div id="filters">
        <h2>Filters</h2>
        <label>
            Type:
            <select value={type} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
            </select>
        </label>
        <label>
            Price:
            <select value={price} onChange={handlePriceChange}>
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
        </label>
        </div>
    );
};

export default AttractionFilter;
