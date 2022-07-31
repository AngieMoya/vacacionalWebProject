import React from 'react';
import Logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';


function Header({ isLoggedIn }) {

    let location = useLocation();

    let typeUser = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).type : null;

    let optionsHeader = [];
    if (isLoggedIn) {
        optionsHeader.push({ name: 'Inicio', url: '/' });
        if (typeUser !== 'enterprise') optionsHeader.push({ name: 'Ofertas', url: '/offers' });
        if (typeUser === 'recruiter') optionsHeader.push({ name: 'Crear ofertas', url: '/create-offers' });
        if (typeUser === 'enterprise') optionsHeader.push({ name: 'Registrar reclutador', url: '/register-recruiter' });
        optionsHeader.push({ name: 'Cerrar sesión', url: '/logout' });
    } else {
        optionsHeader.push(
            { name: 'Inicio', url: '/' },
            { name: 'Ofertas', url: '/offers' },
            { name: 'Iniciar sesión', url: '/login' },
            { name: 'Registrarse', url: '/register' }
        );
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><a href='/'><img src={Logo} alt='Logo svg' /></a></li>
                    <div>
                        {
                            optionsHeader.map((option, index) => {
                                return (
                                    <li key={index}><a href={option.url} className={location.pathname === option.url ? 'linkActive' : 'link'}>{option.name}</a></li>
                                )
                            })
                        }
                    </div>
                </ul>
            </nav>
        </header>
    )

}

export default Header;