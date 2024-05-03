import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import quadrapoliesportiva from "../media/QUADRA-3.jpg"
import cardfutebol from "../media/QUADRA-FUT.jpg"
import cardareia from "../media/QUADRA-volei.jpg"
import cardcomida from "../media/COMIDA-3.jpg"
import carddrink from "../media/COMIDA-1.jpg"
import cardbuffet from "../media/SERVICO-1.jpg"
import cardaluguel1 from "../media/SERVICO-2.jpg"
import cardaluguel2 from "../media/SERVICO-3.jpg"
import cardaluguel3 from "../media/SERVICO-4.jpg"
const quadras = [
  {
    nome: 'Quadra Poliesportiva',
    descricao: 'Piso esportivo modular com tecnologia de amortecimento que amplia substancialmente o conforto e a segurança na prática de esportes, reduzindo significativamente a ocorrência de contusões em joelhos, coluna e pernas.',
    imagem: quadrapoliesportiva
  },
  {
    nome: 'Campo society',
    descricao: 'Campo society coberto do Q-BALL, a melhor grama esportiva da atualidade. Grama sintética padrão europeu, bicolor, 62mm de altura, feita em monofilamento entrelaçado com fibras de alta tecnologia, que garante melhor performance e absorção de impactos nas partidas de futebol.',
    imagem: cardfutebol
  },
  {
    nome: 'Quadra de Vôlei de Praia',
    descricao: 'Areia fina e espaço para partidas emocionantes, nossa estrutura conta com 3 quadras de volei de praia, aonde pode ser utilizada para uma diversidade de esportes',
    imagem: cardareia
  },
  // ... Adicione mais quadras conforme necessário
];

const servicos = [
  // Adicione seus serviços aqui
  {
    nome: 'Restaurante',
    descricao: 'Menu diversificado e delicioso.',
    imagem: cardcomida
  },
  {
    nome: 'Bebidas',
    descricao: 'Diversidades de drinks e bebidas',
    imagem: carddrink
  },
  {
    nome: 'Buffet para festas',
    descricao: 'Nosso buffet completo',
    imagem: cardbuffet
  },
  // ... outros serviços
];

const alugueis = [
  // Adicione seus alugueis aqui
  {
    nome: 'Espaço para Eventos',
    descricao: 'Ideal para celebrações e eventos esportivos.',
    imagem: cardaluguel1
  },
  {
    nome: 'Espaço para Eventos',
    descricao: 'Ideal para celebrações e eventos esportivos.',
    imagem: cardaluguel2
  },
  {
    nome: 'Espaço para Eventos',
    descricao: 'Ideal para celebrações e eventos esportivos.',
    imagem: cardaluguel3
  },
  // ... outros alugueis
];

interface Quadra {
  nome: string;
  descricao: string;
  imagem: string;
  // Adicione mais campos conforme necessário
}
  const Estrutura: React.FC = () => {
    const [show, setShow] = useState(false);
    const [confirm, setConfirm] = useState(false); // Novo estado para o modal de confirmação
    const [selectedQuadra, setSelectedQuadra] = useState<Quadra | null>(null);
    const [horario, setHorario] = useState('');
    const [quantidadeHoras, setQuantidadeHoras] = useState('');
  
    const handleClose = () => setShow(false);
    const handleQuadraShow = (quadra: Quadra) => {
      setSelectedQuadra(quadra);
      setShow(true);
    };
  
    const handleConfirm = () => {
      if (selectedQuadra) {
        window.open(`https://wa.me/?text=Eu%20reservei%20a%20quadra%20${selectedQuadra.nome}%20para%20o%20horário%20${horario}%20por%20${quantidadeHoras}%20horas.`, '_blank');
      }
      setConfirm(false); // Fecha o modal de confirmação
      handleClose();
    };
    const horarios = ["10:00", "10:30", "11:00", "11:30", /*...*/ "23:00"]; 
  <Modal.Header closeButton>
  <Modal.Title>Reservar {selectedQuadra ? selectedQuadra.nome : ''}</Modal.Title>
  </Modal.Header>
const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(null);

// Função para abrir o modal correspondente com tipo explícito para 'index'
const handleShowModal = (index: number): void => {
  setSelectedModalIndex(index);
};
// Função para fechar o modal
const handleCloseModal = (): void => {
  setSelectedModalIndex(null);
};
const handleAluguelShow = (alugueis: Alugueis) => {
  console.log(alugueis.nome); // use a variável 'aluguel' aqui
  setShow(true); // adicione esta linha
};
type Alugueis = {
  nome: string;
  descricao: string;
  imagem: string;
};

  return (
  
       <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Estrutura</h2>
        </Col>
      </Row>
      <Row className="d-flex align-items-stretch">
      {quadras.map((quadra, index) => (
        <Col md={4} key={index} className="mb-5">
          <Card className="h-100 d-flex flex-column shadow-lg"> {/* Adicione estas classes */}
            <Card.Img variant="top" src={quadra.imagem} />
            <Card.Body className="flex-grow-1"> {/* Adicione esta classe */}
              <Card.Title>{quadra.nome}</Card.Title>
              <Card.Text>{quadra.descricao}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center"> {/* Adicione este elemento */}
            <Button variant="success" onClick={() => handleQuadraShow(quadra)}>Reservar Quadra</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
      {/* Seção de Serviços */}
      <Row className="d-flex align-items-stretch">
  {servicos.map((servico, index) => (
    <Col md={4} key={index} className="mb-5">
      <Card className="h-100 d-flex flex-column shadow-lg">
        <Card.Img variant="top" src={servico.imagem}/>
        <Card.Body className="flex-grow-1">
          <Card.Title>{servico.nome}</Card.Title>
          <Card.Text>{servico.descricao}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success" onClick={() => handleShowModal(index)}>Saiba Mais</Button>
        </Card.Footer>
      </Card>
      <Modal show={selectedModalIndex === index} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Serviço - {servico.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {index === 0 && (
            <p>Informações sobre o restaurante, incluindo menu e horários de funcionamento.</p>
          )}
          {index === 1 && (
            <p>Detalhes sobre as bebidas e drinks disponíveis, incluindo especialidades da casa.</p>
          )}
          {index === 2 && (
            <p>Opções de buffet para festas, com descrição dos pacotes e serviços inclusos.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </Col>
  ))}
</Row>
{/* Seção de Aluguel de Ambiente */}
<Row className="d-flex align-items-stretch">
  {alugueis.map((aluguel, index) => (
    <Col md={4} key={index} className="mb-5">
      <Card className="h-100 d-flex flex-column shadow-lg">
        <Card.Img variant="top" src={aluguel.imagem} />
        <Card.Body className="flex-grow-1">
          <Card.Title>{aluguel.nome}</Card.Title>
          <Card.Text>{aluguel.descricao}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success" onClick={() => handleAluguelShow(aluguel)}>Reservar Aluguel</Button>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar {aluguel.nome}</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  ))}
</Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar {selectedQuadra?.nome}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formHorario">
            <Form.Label>Horário</Form.Label>
            <div className="d-flex flex-wrap">
              {horarios.map((hora, index) => (
              <Button key={index} variant={horario === hora ? "success" : "secondary"} onClick={() => setHorario(hora)} className="m-1">
              {hora}
              </Button>
          ))}
      </div>
      <Form>
           
            {/* Adicione este novo campo de descrição do aluguel */}
            <Form.Group controlId="formDescricaoAluguel">
              <Form.Label>Descrição do Aluguel</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Detalhe aqui o seu aluguel..." />
            </Form.Group>
          </Form>
    </Form.Group>
    <Form.Group controlId="formQuantidadeHoras">
      <Form.Label>Quantidade de Horas</Form.Label>
      <Form.Control type="number" value={quantidadeHoras} onChange={(e) => setQuantidadeHoras(e.target.value)} />
    </Form.Group>
  </Form>
  <div className="d-flex justify-content-center mt-3">
    <Button variant="success" className="me-2" onClick={() => setConfirm(true)}>Reservar</Button>
    <Button variant="danger" onClick={() => setConfirm(false)}>Cancelar</Button>
  </div>
</Modal.Body>

      </Modal>
      <Modal show={confirm} onHide={() => setConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação de Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ao clicar em "Continuar", você confirmará a reserva do horário com o Qball no WhatsApp. A empresa verificará a disponibilidade e a reserva será feita após o pagamento.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleConfirm}>
          Continuar
          </Button>
        </Modal.Footer>
      </Modal>
</Container>
  );
}
export default Estrutura;