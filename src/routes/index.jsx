/*ROUTER DOM*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Senha } from '../pages/Senha/index'
import { Login } from '../pages/Login/index'
import { Cadastro } from '../pages/Cadastro/index'
import { DetalheVaga } from '../components/DetalheVaga'
import { DetalheFormacao } from '../components/DetalheFormacao'
import { DetalheCurriculo } from '../components/DetalheCurriculo'
import { DetalheHabilidades } from '../components/DetalheHabilidades'
import { DetalheRequisitos } from '../components/DetalheRequisitos'
import { DetalheEndereco } from '../components/DetalheEndereco'
import { DetalheExperiencia } from '../components/DetalheExperiencia'
import  Empresas  from '../pages/Empresas/index'
import  Contato  from '../pages/Contato/index'
import  Avaliacoes  from '../pages/Avaliacoes/index'
import  Vaga  from '../pages/Vagas/index'
import { CardVagas } from '../components/CardVagas'
import  Inicio  from '../components/InicioComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sobre from '../pages/Sobre/index'

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
                <Route path="vagas/vaga/:id" element={<DetalheVaga />} />
                <Route path="/detalhe-curriculo" element={<DetalheCurriculo />} />
                <Route path="/detalhe-formacao" element={<DetalheFormacao />} />
                <Route path="/detalhe-habilidades" element={<DetalheHabilidades />} />
                <Route path="/detalhe-requisitos" element={<DetalheRequisitos />} />
                <Route path="/detalhe-endereco" element={<DetalheEndereco />} />
                <Route path="/detalhe-experiencia" element={<DetalheExperiencia />} />
                <Route path="/card-vagas" element={<CardVagas />} />
            </Routes>
            <Footer/>
        </Router>
        
    );
};

export default AppRouter;