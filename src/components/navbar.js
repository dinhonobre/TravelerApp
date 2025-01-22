// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav>
        <h1>Travel Guide</h1> {/* Título do aplicativo */}
        <ul>
            <li><a href="#attractions">Attractions</a></li> {/* Link para a lista de atrações */}
            <li><a href="#filters">Filters</a></li> {/* Link para os filtros */}
        </ul>
        </nav>
    );
};

export default Navbar;
