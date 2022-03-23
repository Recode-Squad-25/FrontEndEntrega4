/*ROUTER DOM*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Senha } from '../pages/Senha/index'
import { Login } from '../pages/Login/index'
import { Cadastro } from '../pages/Cadastro/index'
import  Empresas  from '../pages/Empresas/index'
import  Contato  from '../pages/Contato/index'
import  Avaliacoes  from '../pages/Avaliacoes/index'
import  Vaga  from '../pages/Vagas/index'
import  Inicio  from '../components/InicioComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sobre from '../pages/Sobre/index'
import ListVaga from '../components/ListVagaComponent'
import ListCurriculo from '../components/ListCurriculoComponent'
import CreateVaga from '../components/CreateVagaComponent'
import CreateCurriculo from '../components/CreateCurriculoComponent'

const AppRouter = () => {
    return (
        <Router>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/senha" element={<Senha />} />
                <Route path="/vagas" element={<Vaga />} />
                <Route path="/empresas" element={<Empresas />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/avaliacoes" element={<Avaliacoes />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/vagas" element={<ListVaga />} />
                <Route path="/curriculo" element={<ListCurriculo />} />
                <Route path="/add-vaga" element={<CreateVaga />} />
                <Route path="/add-curriculo" element={<CreateCurriculo />} />
            </Routes>
            <Footer/>
        </Router>
        
    );
};

export default AppRouter;