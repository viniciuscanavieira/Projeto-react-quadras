// components/Navbar.tsx
import React, { useState } from 'react';
import logoImage from '../media/Logo Qball.png'; // Substitua pelo caminho correto da imagem
import "../styles/custom.css"
import "../styles/Navbar.css"
import { Button } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-lg">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          <img src={logoImage} alt="Quadra Esportiva" className="shadow-lg" style={{ maxWidth: '100px', borderRadius: '20px' }} />
        </a>
        <Button className="button-wpp bg-success text-white d-lg-none" size="lg">Reserve Agora</Button> {/* Botão visível apenas em telas pequenas */}
        <button className="navbar-toggler" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)} aria-controls="navbarNav" aria-expanded={isNavExpanded ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavExpanded ? 'show' : ''} collapse navbar-collapse justify-content-center`} id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item active">
              <a className="nav-link fs-4 my-2 mx-3 text-success" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 my-2 mx-3 text-white" href="#estrutura">Aluguel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 my-2 mx-3 text-white" href="#precos">Preços</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fs-4 my-2 mx-3 text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mais
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#acao">Ação</a>
                <a className="dropdown-item" href="#outra-acao">Outra ação</a>
                <a className="dropdown-item" href="#algo-mais">Algo mais aqui</a>
              </div>
            </li>
          </ul>
        </div>
        <Button className="button-wpp bg-success text-white d-none d-lg-block" size="lg">Reserve Agora</Button> {/* Botão visível apenas em telas grandes */}
      </div>
    </nav>
  );
};

export default Navbar;
