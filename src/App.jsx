import './styles/footer.css'
import './styles/navbar.css'
import  AppRouter  from './routes';
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

