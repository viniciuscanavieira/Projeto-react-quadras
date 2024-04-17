import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../media/gramadonovo.jpg'; // Certifique-se de que o caminho está correto
import "../styles/custom.css"

const SobreNos: React.FC = () => {
  return (
    // Container fluido para ocupar toda a largura da tela
    <Container fluid className="py-5" style={{
      backgroundImage: `url(${backgroundImage})`, // Define a imagem de fundo
      backgroundSize: 'cover', // Garante que a imagem cubra todo o espaço disponível
      backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
      backgroundPosition: 'center center' // Centraliza a imagem de fundo
    }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="p-5 bg-white" style={{
            borderRadius: '15px', // Arredonda os cantos do elemento
            margin: 'auto', // Centraliza o elemento na página
            maxWidth: '80%', // Define a largura máxima do elemento
            opacity: 0.9 // Adiciona transparência ao fundo branco para melhor visualização da imagem
          }}>
            <h2 className="mb-4 font-weight-bold font-chewy">Sobre Nós</h2>
            {/* Conteúdo do componente */}
            <Button className="bg-success text-white" size="lg">Reserve Agora</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SobreNos;
