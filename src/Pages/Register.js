import React, { useState } from 'react';
import Axios from 'axios';

function Register({ isLoggedIn }) {

    if (isLoggedIn) {
        window.location.href = '/';
    }

    let [name, setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rePassword, setRePassword] = useState('');
    let [date, setDate] = useState('');
    let [sex, setSex] = useState('');
    let [typeDNI, setTypeDNI] = useState('CC');
    let [numberDNI, setNumberDNI] = useState('');
    let [profession, setProfession] = useState('');
    let [country, setCountry] = useState('Colombia');
    let [city, setCity] = useState('Barranquilla');
    let [error, setError] = useState(false);
    let [error2, setError2] = useState(false);
    let [success, setSuccess] = useState(false);

    function onSubmit() {
        if (name.length === 0) return setError(true);
        if (lastName.length === 0) return setError(true);
        if (email.length === 0) return setError(true);
        if (password.length === 0) return setError(true);
        if (rePassword.length === 0) return setError(true);
        if (password !== rePassword) return setError(true);
        if (date.length === 0) return setError(true);
        if (sex.length === 0) return setError(true);
        if (typeDNI.length === 0) return setError(true);
        if (numberDNI.length === 0) return setError(true);
        if (profession.length === 0) return setError(true);
        if (country.length === 0) return setError(true);
        if (city.length === 0) return setError(true);
        if (numberDNI.length === 0) return setError(true);
        if (numberDNI.length === 0) return setError(true);
        setError(false);
        setError2(false);
        let userData = {
            data: {
                type: 'natural',
                name: `${name} ${lastName}`,
                email,
                password,
                extra_data: {
                    natural_users: {
                        identification_type: typeDNI,
                        identification: numberDNI,
                        profession,
                        country,
                        city,
                        hv: '',
                        birthdate: date,
                        gender: sex,
                    }
                }
            }
        }
        Axios.post('https://w5vxmb3jjf.execute-api.us-east-2.amazonaws.com/dev/users', userData)
            .then(res => {
                if (res.data.status) {
                    setSuccess(true);
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                } else {
                    setError2(true);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="login-section">
            <div className="login-form" style={{ width: '650px' }}>
                <div className="login-header">
                    <h2>Regístrate</h2>
                    <p>Diligencia el formulario para realizar el proceso de registro</p>
                </div>
                <br />
                <hr />
                <div className="form">
                    <div className="input-field" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <input type='text' placeholder='Nombre' value={name} onChange={e => setName(e.target.value)} style={{ width: '100%' }} />
                        <input type='text' placeholder='Apellido' value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: '100%' }} />
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder='Correo electrónico' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Repetir contraseña' value={rePassword} onChange={e => setRePassword(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='dateRegister' style={{ textAlign: 'left', fontWeight: '500', fontSize: '.8rem' }}>Fecha de nacimiento: <span style={{ color: '#ccc' }}>DD/MM/AA</span></label>
                        <input id='dateRegister' type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='sexRegister' style={{ textAlign: 'left', fontWeight: '500', fontSize: '.8rem' }}>Sexo</label>
                        <select id='sexRegister' value={sex} onChange={e => setSex(e.target.value)} style={{ outline: 'none', borderRadius: '4px', padding: '0.7rem', fontSize: '.9rem', background: 'var(--white)', border: '1px solid #eef' }}>
                            <option value='Mujer'>Mujer</option>
                            <option value='Hombre'>Hombre</option>
                            <option value='Personalizado'>Personalizado</option>
                        </select>
                    </div>
                    <div className='input-field' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <select value={typeDNI} onChange={e => setTypeDNI(e.target.value)} style={{ outline: 'none', borderRadius: '4px', padding: '0.7rem', fontSize: '.9rem', background: 'var(--white)', border: '1px solid #eef' }}>
                            <option value='CC'>Cédula de ciudadanía</option>
                        </select>
                        <input type='number' placeholder='Número de cédula' style={{ width: '100%' }} value={numberDNI} onChange={e => setNumberDNI(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Profesión' value={profession} onChange={e => setProfession(e.target.value)} />
                    </div>
                    <div className="input-field" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <select value={country} onChange={e => setCountry(e.target.value)} style={{ outline: 'none', borderRadius: '4px', padding: '0.7rem', fontSize: '.9rem', background: 'var(--white)', border: '1px solid #eef' }}>
                            <option value='Colombia'>Colombia</option>
                        </select>
                        <select value={city} onChange={e => setCity(e.target.value)} style={{ outline: 'none', borderRadius: '4px', padding: '0.7rem', fontSize: '.9rem', background: 'var(--white)', border: '1px solid #eef' }}>
                            <option value='Barranquilla'>Barranquilla</option>
                        </select>
                    </div>
                    {
                        error && <h3 style={{ color: 'var(--white)', background: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>No ha ingresado alguno de los datos solicitados o estos se encuentran erróneos.</h3>
                    }
                    {
                        error2 && <h3 style={{ color: 'var(--white)', background: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Algo fallo a la hora de crear su cuenta, no se pudo completar.</h3>
                    }
                    {
                        success && <h3 style={{ color: 'var(--white)', background: '#039555', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Felicidades, su cuenta ha sido registrada con éxito.</h3>
                    }
                    <button className="button p-btn" onClick={onSubmit}>Registrarte</button>
                    <a href='/login' className="button p-btn" style={{ background: 'transparent', color: 'var(--blue)', textDecoration: 'none' }}>Iniciar sesión</a>
                    <div className="form-action">
                        <div className="form-text">
                            <p style={{ color: '#ccc', fontSize: '.9rem', margin: '.5rem 0', display: 'block', textAlign: 'justify' }}>Al hacer click en "Registrarte", aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Register;