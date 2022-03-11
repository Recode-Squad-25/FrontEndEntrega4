import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Avaliacoes from './components/Avaliacoes'
import ScrollTop from './components/ScrollTop'
import Vaga from './components/VagaComponent'
import Inicio from './components/InicioComponent'
import Empresa from './components/EmpresaComponent'
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div>

      <Router>
      <ScrollTop/>
        <Navbar />
        <Routes>        
          <Route path="/" element={<Inicio/>} />
          <Route path="/vagas" element={<Vaga/>} />
          <Route path="/empresas" element={<Empresa/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/avaliacoes" element={<Avaliacoes/>} />          
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
