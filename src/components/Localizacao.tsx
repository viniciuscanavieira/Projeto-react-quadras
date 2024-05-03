import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../styles/custom.css"

const Localizacao: React.FC = () => {
  return (
    <Card className="bg-success mb-4 shadow-lg"> {/* Altere a div para Card */}
      <Card.Body> {/* Adicione Card.Body */}
        <Container className="my-2">
          <Row>
            <Col className="text-white text-center">
              <h2>Localização</h2>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="mb-4 shadow-lg">
              <Card.Body>
                <div style={{ height: '300px' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.985173193524!2d-44.256310589011306!3d-2.51173369745622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68f9d503eccd9%3A0x1d60af66fa25f442!2sQ-BALL!5e0!3m2!1spt-BR!2sbr!4v1712087020089!5m2!1spt-BR!2sbr"
                    allowFullScreen>
                  </iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Container className="my-4">
          <Row className="justify-content-center"> {/* Adicione esta classe */}
            <Col md={8} className="text-center"> {/* Adicione esta classe */}
              <p className="text-white">Encontre-nos no coração da cidade, acessível e pronto para recebê-lo:</p>
              <address className="text-white">
                Rua Fictícia, 123<br />
                Bairro Imaginário, São Luís - MA<br />
                CEP: 65000-000
              </address>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card> 
  );
};

export default Localizacao;
