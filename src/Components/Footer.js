import React from 'react';
import Logo from '../assets/logo.png';

function Footer() {

    return (
        <footer
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
            }}
        >
            <img
                style={{
                    marginBottom: '2rem'
                }}
                src={Logo}
                alt='logo'
            />
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '1.5rem'}}>
                <li><a href='/' className='link'>Inicio</a></li>
                <li><a href='/' className='link'>Mapa del sitio</a></li>
                <li><a href='/' className='link'>Soporte</a></li>
                <li><a href='/' className='link'>Contáctenos</a></li>
            </ul>
        </footer>
    )

}

export default Footer;

