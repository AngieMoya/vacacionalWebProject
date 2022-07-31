import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Axios from 'axios';

function RegisterRecruiter ({ isLoggedIn }) {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rePassword, setRePassword] = useState('');
    let [error, setError] = useState('');
    let [success, setSuccess] = useState(false);

    function Submit() {
        if (email.length === 0) return setError('Debe ingresar el correo electrónico.');
        if (password.length === 0) return setError('Debe ingresar la contraseña.');
        if (rePassword.length === 0) return setError('Debe repetir la contraseña.');
        if (password !== rePassword) return setError('Las contraseñas no coinciden.');
        setError('');
        let enterprise_id = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).id : null;
        let userData = {
            data: {
                type: 'recruiter',
                email,
                password,
                extra_data: {
                    recruiter: {
                        email,
                        enterprise_id,
                        password
                    }
                }
            }
        }
        Axios.post('https://w5vxmb3jjf.execute-api.us-east-2.amazonaws.com/dev/users', userData)
            .then(res => {
                if (res.data.status) {
                    setSuccess(true);
                    setTimeout(() => {
                        window.location.href = '/register-recruiter';
                    }, 3000);
                } else {
                    setError("Ha ocurrido un error al guardar tus datos");
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }
    });

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <section className="login-section" style={{ minHeight: 'calc(100vh - 6.25rem)' }}>
            <div className="login-form">
                <div className="login-header">
                    <h2>Registrar reclutador</h2>
                    <p>Ingrese un email y una contraseña para generar un nuevo reclutador</p>
                </div>
                <div className="form">
                    <div className="input-field">
                        <input type="email" placeholder='Correo electrónico' value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Repetir contraseña' value={rePassword} onChange={e => setRePassword(e.target.value)} required />
                    </div>
                    {
                        error !== '' && <h3 style={{ color: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>{error}</h3>
                    }
                    {
                        success && <h3 style={{ color: 'var(--white)', background: '#039555', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Ha ingresado correctamente</h3>
                    }
                    <button className="button p-btn" onClick={Submit}>Registrar</button>
                
                </div>
                </div>
            </section>
        </>
    )
}

export default RegisterRecruiter;