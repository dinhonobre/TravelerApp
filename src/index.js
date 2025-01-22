import './index.css'; // Importando os estilos globais
import React from 'react';
import ReactDOM from 'react-dom/client';  // Altere a importação para 'react-dom/client'
import App from './App'; // O componente principal do aplicativo
import reportWebVitals from './reportWebVitals';

// Crie a raiz usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Agora use root.render() para renderizar o aplicativo
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente principal */}
  </React.StrictMode>
);

// Função opcional para medir o desempenho do app
reportWebVitals();
