import './styles/login.css'
import './styles/avaliacoes.css'
import './styles/contato.css'
import './styles/footer.css'
import './styles/inicio.css'
import './styles/navbar.css'
import { AppRouter } from './routes';
import ScrollTop from './components/ScrollTop'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <>
    <ScrollTop/>
    <Navbar />
    <AppRouter />
    </>
  );
};

