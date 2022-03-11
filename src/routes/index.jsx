/*ROUTER DOM*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Senha } from '../pages/Senha'
import { Login } from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'
import { Contato } from '../pages/Contato'
import { Avaliacoes } from '../pages/Avaliacoes'
import { Vaga } from '../components/VagaComponent'
import { Inicio } from '../components/InicioComponent'
import { Empresa } from '../components/EmpresaComponent'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/senha" element={<Senha />} />
                <Route path="/vagas" element={<Vaga />} />
                <Route path="/empresas" element={<Empresa />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/avaliacoes" element={<Avaliacoes />} />
            </Routes>
        </Router>
    );
};