import './index.css'; // Importando os estilos globais
import React from 'react';
import ReactDOM from 'react-dom/client'; // Altere a importação para 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter
import App from './App'; // O componente principal do aplicativo
import reportWebVitals from './reportWebVitals';

// Crie a raiz usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Agora use root.render() para renderizar o aplicativo
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolvendo o App com BrowserRouter */}
      <App /> {/* Renderiza o componente principal */}
    </BrowserRouter>
  </React.StrictMode>
);

// Função opcional para medir o desempenho do app
reportWebVitals();
