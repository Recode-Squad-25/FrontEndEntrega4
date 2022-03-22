import React from 'react';
import './styles/footer.css';
import './styles/navbar.css';
import AppRouter from './routes';
import ScrollTop from './components/ScrollTop'



export const App = () => {
  return (
    <>
      <AppRouter>
      <ScrollTop/>
      </AppRouter>
      
      
    </>
  );
};

