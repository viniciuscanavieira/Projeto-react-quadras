import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../media/gramadonovo.jpg'; // Certifique-se de que o caminho está correto
import "../styles/custom.css"

const SobreNos: React.FC = () => {
  return (
    <Container fluid className="py-5" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="p-5 bg-white" style={{
            borderRadius: '15px',
            margin: 'auto',
            maxWidth: '80%',
            opacity: 0.9
          }}>
            <h2 className="mb-4 font-weight-bold">Sobre Nós</h2>
            <p className="mb-4">
              A Qball é um centro de quadras esportivas, criado com o objetivo de proporcionar a melhor experiência em esportes e lazer. Acreditamos na importância do esporte e do lazer para a saúde e bem-estar, e é por isso que oferecemos instalações de alta qualidade para nossos clientes. Seja para um jogo casual com amigos, um torneio competitivo ou um evento especial, a Qball está aqui para atender às suas necessidades. Junte-se a nós e descubra como a Qball pode enriquecer seu tempo livre e bem-estar.
            </p>
            <Button className="bg-success text-white" size="lg">Reserve Agora</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SobreNos;
