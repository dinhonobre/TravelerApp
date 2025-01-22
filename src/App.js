// src/App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import AttractionFilter from './components/attractionFilter';
import AttractionList from './components/attractionList';
import Rating from './components/rating'; // Importe o componente Rating
import attractionsData from './data/attractions';
import './index.css';
import './App.css';

const App = () => {
  const [filteredAttractions, setFilteredAttractions] = useState(attractionsData);
  const [ratings, setRatings] = useState({}); // Armazenar as avaliações no estado

  // Função para filtrar as atrações com base no tipo e preço
  const handleFilterChange = (type, price) => {
    let filtered = attractionsData;

    if (type) {
      filtered = filtered.filter((attraction) => attraction.type === type);
    }

    if (price) {
      filtered = filtered.filter((attraction) => attraction.price === price);
    }

    setFilteredAttractions(filtered);
  };

  // Função para adicionar uma nova avaliação
  const handleAddRating = (attractionId, rating) => {
    setRatings((prevRatings) => {
      return { ...prevRatings, [attractionId]: rating }; // Atualiza a avaliação para a atração
    });
  };

  return (
    <div className="App">
      <Navbar />
      <AttractionFilter onFilterChange={handleFilterChange} />
      <AttractionList attractions={filteredAttractions} />
      
      {filteredAttractions.map((attraction) => (
        <div key={attraction.id} className="attraction-item">
          <h3>{attraction.name}</h3>
          <Rating
            attractionId={attraction.id}
            onAddRating={handleAddRating}
          />
          <div className="rating-display">
            <p>Rating: {ratings[attraction.id] || 'Not rated yet'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
