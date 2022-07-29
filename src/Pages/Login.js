import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Google from '../assets/login/Google.svg';
import Facebook from '../assets/login/Facebook.svg';

function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            window.location.href = '/';
        }
    });

    function Submit() {
        if (email.length === 0) return setError(true);
        if (password.length === 0) return setError(true);

        setError(false);
        Axios.get(`https://w5vxmb3jjf.execute-api.us-east-2.amazonaws.com/dev/users?email="${email}"`)
            .then(res => {
                if (res.data.status) {
                    if (res.data.data.password === password) {
                        localStorage.setItem('token', JSON.stringify(res.data.data));
                        setSuccess(true);
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 3000);
                    } else {
                        setError("Contraseña incorrecta")
                    }
                }else{
                    setError("El usuario ingresado no existe");
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <section className="login-section">
            <div className="login-form">
                <div className="login-header">
                    <h2>Iniciar sesión</h2>
                    <p>Ingresa tu usuario y contraseña para iniciar sesión</p>
                </div>
                <div className="form">
                    <div className="input-field">
                        <input type="email" placeholder='Correo electrónico' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {
                        error && <h3 style={{ color: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>{error}</h3>
                    }
                    {
                        success && <h3 style={{ color: 'var(--white)', background: '#039555', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Ha ingresado correctamente</h3>
                    }
                    <button className="button p-btn" onClick={Submit}>Iniciar sesión</button>
                    <div className="form-action">
                        <span>Or Sign in with</span>
                        <div className="option-container">
                            <div className="option-box">
                                <button>Iniciar sesión con <img style={{ width: '12.5%', margin: '0 .5rem' }} src={Google} alt='Google logo' /></button>
                            </div>
                            <div className="option-box" style={{ borderColor: 'var(--blue)' }}>
                                <button >Iniciar sesión con <img style={{ width: '12.5%', margin: '0 .5rem' }} src={Facebook} alt='Facebook' /></button>
                            </div>
                        </div>
                        <div className="form-text">
                            <a href='/'>Recuperar usuario y/o contraseña</a>
                            <a href="/register">Registrarse</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Login;