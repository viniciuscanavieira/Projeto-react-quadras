// components/FaleConosco.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FaleConosco: React.FC = () => {
  return (
    <div className="card text-center shadow-lg p-3">
      <h2 className='card-title'>Fale Conosco</h2>
      <div className="card-body">
        {/* Ícone do Instagram */}
        <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark m-1">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* Ícone do WhatsApp */}
        <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark m-1">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        {/* Ícone do Facebook */}
        <a href="https://www.facebook.com/seupagina" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark m-1">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default FaleConosco;
