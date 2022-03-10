import './styles/login.css'
import FormacaoComponent from './services/FormacaoService';
import { AppRouter } from './routes';


export const App = () => {
  return (
    <>
    <FormacaoComponent />
    <AppRouter />
    </>
  );
};

