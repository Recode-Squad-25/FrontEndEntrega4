/*ROUTER DOM*/
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Senha } from '../pages/Senha'
import { Login } from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/senha" element={<Senha />} />
            </Routes>
        </Router>
    );
};