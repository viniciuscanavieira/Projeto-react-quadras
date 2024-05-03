import React from 'react';
import { Container, Col, Button, Row, Image } from 'react-bootstrap';
import logoImage from '../media/Logo Qball.png'; // Substitua pelo caminho correto da imagem
import background from '../media/fundo-p1.jpg';
import '../styles/custom.css';

const Home: React.FC = () => {
  return (
    <div
    className="bg-gray d-flex align-items-center justify-content-center shadow-lg" 
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', // Ajuste o tamanho da imagem aqui
      backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
      backgroundPosition: 'center center', // Centraliza a imagem de fundo
      height: '100%', // Isso fará com que a altura se ajuste ao conteúdo
      minHeight: '100vh', // Isso garantirá que o plano de fundo cubra toda a altura da janela de visualização
    }}
  >
      <Container fluid className="text-white text-center vh-100">
        <Row className="justify-content-md-center align-items-center h-100">
          <Col md={5} className="component-hover">
            <h1
              className="fw-bold"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Bem-vindo ao Maior Centro de Quadras Esportivas!
            </h1>
            <p
              className="lead"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
            >
              Sua jornada para a saúde e diversão começa aqui. Encontre a quadra perfeita para o seu jogo!
            </p>
            <Button className="bg-success text-white" size="lg">
              Reserve Agora
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src={logoImage}
              alt="Quadra Esportiva"
              fluid
              className="shadown-lg bg-gray" // Adicione a classe de sombra aqui
              style={{ maxWidth: '70%', height: 'auto', borderRadius: '20px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
