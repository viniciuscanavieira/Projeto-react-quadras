
import Navbar from './components/NavBar'; 
import Home from './components/Home';
import SobreNos from './components/SobreNos';
import Estrutura from './components/Estrutura';
import Localizacao from './components/Localizacao';
import FaleConosco from './components/FaleConosco';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="sobrenos">
        <SobreNos />
      </div>
      <div id="estrutura">
        <Estrutura />
      </div>
      <div id="localizacao">
        <Localizacao />
      </div>
      <div id="faleconosco">
        <FaleConosco />
      </div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="text-center p-4">
          © 2024 Direitos Reservados
          RavaTech
        </div>
      </footer>
    </>
  );
};

export default App;
