import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar estados.
import Navbar from './components/navbar'; // Componente da barra de navegação.
import AttractionFilter from './components/AttractionFilter'; // Componente de filtros para as atrações.
import AttractionList from './components/AttractionList'; // Lista de atrações a ser exibida.
import Rating from './components/rating'; // Componente de classificação (rating) das atrações.
import attractionsData from './data/attractions'; // Dados estáticos das atrações.
import './index.css'; // Estilos globais do projeto.
import './App.css'; // Estilos específicos do componente App.

/**
 * Componente principal do aplicativo.
 */
const App = () => {
    // Estado para armazenar a lista de atrações filtradas.
    const [filteredAttractions, setFilteredAttractions] = useState(attractionsData);

    // Estado para armazenar as avaliações de cada atração.
    const [ratings, setRatings] = useState({});

    // Estado para abrir/fechar o menu hambúrguer.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Função de busca para filtrar atrações com base no nome.
     * @param {string} term - Termo digitado no campo de busca.
     */
    const handleSearch = (term) => {
        const filtered = attractionsData.filter(attraction =>
            attraction.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredAttractions(filtered); // Atualiza o estado com as atrações filtradas.
    };

    /**
     * Função para aplicar filtros de tipo e preço às atrações.
     * @param {string} type - Tipo de atração (ex.: "parque", "museu").
     * @param {string} price - Faixa de preço (ex.: "barato", "caro").
     */
    const handleFilterChange = (type, price) => {
        let filtered = attractionsData;

        if (type) {
            filtered = filtered.filter((attraction) => attraction.type === type);
        }

        if (price) {
            filtered = filtered.filter((attraction) => attraction.price === price);
        }

        setFilteredAttractions(filtered); // Atualiza o estado com os filtros aplicados.
    };

    /**
     * Função para adicionar/atualizar a avaliação de uma atração.
     * @param {number} attractionId - ID único da atração.
     * @param {number} rating - Nova avaliação da atração.
     */
    const handleAddRating = (attractionId, rating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [attractionId]: rating, // Atualiza o estado com a nova avaliação.
        }));
    };

    return (
        <div className="App">
            {/* Cabeçalho com Menu Hambúrguer */}
            <header className="hamburger-menu">
                {/* Botão para abrir/fechar o menu */}
                <button 
                    className="menu-btn" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu.
                >
                    ☰ {/* Ícone do menu hambúrguer */}
                </button>
                <h1>Travel Guide</h1>
                
                {/* Conteúdo do menu (aparece apenas quando `isMenuOpen` for true) */}
                {isMenuOpen && (
                    <div className="menu-content">
                        <button className="menu-item">Most visited</button>
                        <button className="menu-item">Include</button>
                        <button className="menu-item">Search</button>
                        <button className="menu-item">Filter</button>
                    </div>
                )}
            </header>

            {/* Imagem de Fundo e Conteúdo Principal */}
            <div className="background">
                {/* Barra de navegação com funcionalidade de busca */}
                <Navbar onSearch={handleSearch} />
                
                {/* Filtros de atrações */}
                <AttractionFilter onFilterChange={handleFilterChange} />
                
                {/* Lista de atrações filtradas */}
                <AttractionList attractions={filteredAttractions} />

                {/* Sugestões de lugares com base nas atrações filtradas */}
                <div className="suggestions">
                    {filteredAttractions.map((attraction) => (
                        <div key={attraction.id} className="attraction-card">
                            <h3>{attraction.name}</h3> {/* Nome da atração */}
                            <Rating
                                attractionId={attraction.id}
                                onAddRating={handleAddRating}
                            /> {/* Componente de avaliação */}
                            <div className="rating-display">
                                <p>Rating: {ratings[attraction.id] || 'Not rated yet'}</p>
                                {/* Mostra a avaliação ou uma mensagem padrão */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App; // Exporta o componente para uso em outras partes do projeto.
