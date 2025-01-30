import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Envia a pesquisa ao App.js
    };

    return (
        <nav className="navbar">
            <h1>Travel Guide</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for attractions"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-bar"
                />
                <ul>
                    <li><Link to="/attractions">Attractions</Link></li>
                    <li><Link to="/filters">Filters</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
