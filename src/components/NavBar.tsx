import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logoImage from '../media/Logo Qball.png'; // Substitua pelo caminho correto da imagem
import "../styles/custom.css"
import "../styles/Navbar.css"

const NavBar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Navbar className="navbar navbar-expand-lg bg-white fixed-top shadow-lg" expand="lg" onToggle={() => setIsNavExpanded(!isNavExpanded)} expanded={isNavExpanded}>
      <Container>
        <Navbar.Brand href="#inicio">
          <img src={logoImage} alt="Quadra Esportiva" className="shadow-lg" style={{ maxWidth: '100px', borderRadius: '20px' }} />
        </Navbar.Brand>
        <Button className="button-wpp bg-success text-white d-lg-none" size="lg">Reserve Agora</Button> {/* Botão visível apenas em telas pequenas */}
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav text-center">
            <Nav.Link className="fs-4 my-2 mx-3 text-success" href="#home">Home</Nav.Link>
            <Nav.Link className="fs-4 my-2 mx-3 text-white" href="#estrutura">Aluguel</Nav.Link>
            <Nav.Link className="fs-4 my-2 mx-3 text-white" href="#localizacao">Localização</Nav.Link>
            <NavDropdown title="Mais" id="navbarDropdownMenuLink" className="fs-4 my-2 mx-3 text-white">
              <NavDropdown.Item href="#acao">Ação</NavDropdown.Item>
              <NavDropdown.Item href="#outra-acao">Outra ação</NavDropdown.Item>
              <NavDropdown.Item href="#algo-mais">Algo mais aqui</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="button-wpp bg-success text-white d-none d-lg-block" size="lg">Reserve Agora</Button> {/* Botão visível apenas em telas grandes */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
