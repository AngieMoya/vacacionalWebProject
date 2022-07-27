import React from 'react';
import Logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';


function Header({ isLoggedIn }) {
    
    let location = useLocation();
    let optionsHeader;
    if (isLoggedIn) {
        optionsHeader = [
            {
                name: 'Inicio',
                url: '/'
            },
            {
                name: 'Ofertas',
                url: '/offers'
            },
            {
                name: 'Cerrar sesión',
                url: '/logout'
            },
        ]
    } else {
        optionsHeader = [
            {
                name: 'Inicio',
                url: '/'
            },
            {
                name: 'Ofertas',
                url: '/offers'
            },
            {
                name: 'Iniciar sesión',
                url: '/login'
            },
            {
                name: 'Regístrate',
                url: '/register'
            },
        ]
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