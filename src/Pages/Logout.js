import React from 'react';

function Logout ({ isLoggedIn, setIsLoggedIn }) {

    if (isLoggedIn) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    } else {
        window.location.href = '/';
    }

    return (
        <>Cerrar sesión</>
    )

}

export default Logout;