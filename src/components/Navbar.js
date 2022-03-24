import React from 'react'
import logo from '../images/geral/logo.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className='container'>
                    <Link exact to="/" className="navbar-brand" href="/#"><img className='logo' src={logo} alt='logo eurotrip' /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {//<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                        }
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/login' className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sobre' className="nav-link">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/vagas' className="nav-link">Vagas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/empresas' className="nav-link">Empresas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/avaliacoes' className="nav-link">Avaliações</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contato' className="nav-link">Contato</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sidebar' className="nav-link">Painéis</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;