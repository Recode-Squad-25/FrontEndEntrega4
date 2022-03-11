import './styles/footer.css'
import './styles/navbar.css'
import AppRouter from './routes';
import ScrollTop from './components/ScrollTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
      <AppRouter>
      <Navbar/>
      <ScrollTop/>
      </AppRouter>
      <Footer/>
      
    </>
  );
};

