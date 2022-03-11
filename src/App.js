import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Avaliacoes from './components/Avaliacoes'
import ScrollTop from './components/ScrollTop'
import VagaComponent from './components/VagaComponent'
import InicioComponent from './components/InicioComponent'
import EmpresaComponent from './components/EmpresaComponent'
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div>

      <Router>
      <ScrollTop/>
        <Navbar />
        <Routes>        
          <Route path="/" element={<InicioComponent/>} />
          <Route path="/vaga" element={<VagaComponent/>} />
          <Route path="/empresa" element={<EmpresaComponent/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/avaliacoes" element={<Avaliacoes/>} />          
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
