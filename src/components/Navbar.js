import React from 'react'
import logo from '../images/geral/logo.png'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className='container'>
                <NavLink exact to="/" className="navbar-brand" href="/#"><img className='logo' src={logo} alt='logo eurotrip' /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                            <NavLink to='/login' className="nav-link" href="/#">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/vagas' className="nav-link" href="/#">Vagas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/empresas' className="nav-link" href="/#">Empresas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/avaliacoes' className="nav-link" href="/#">Avaliações</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contato' className="nav-link" href="/#">Contato</NavLink>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar