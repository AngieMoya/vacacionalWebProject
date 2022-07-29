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
    let [success, setSuccess] = useState(false);

    function onSubmit() {
        if (name.length === 0) return setError("Los campos del nombre son invalidos");
        if (lastName.length === 0) return setError("Los campos del apellido son invalidos");
        if (email.length === 0) return setError("Debe digitar un email de registro");
        if (password.length === 0) return setError("Debe digitar un una contraseña de registro");
        if (rePassword.length === 0) return setError("Debe digitar un una contraseña de registro");
        if (password !== rePassword) return setError("Las contraseñas no coinciden");
        if (date.length === 0) return setError("La fecha es invalida");
        if (typeDNI.length === 0) return setError("Elija un tipo de identificación");
        if (numberDNI.length < 8 || numberDNI.length > 10) return setError("Escriba su numero de identificación valido");
        if (profession.length === 0) return setError("Debe proporcionar su profesion");
        if (country.length === 0) return setError("Seleccione su pais de residencia");
        setError(false);
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
        // if (numberDNI.length > 10) 
        // {
        //     let dateNew = new Date();
        //     let resultado = date - dateNew
        //     console.log(resultado)
            // if (resultado)
                Axios.post('https://w5vxmb3jjf.execute-api.us-east-2.amazonaws.com/dev/users', userData)
                    .then(res => {
                        if (res.data.status) {
                            setSuccess(true);
                            setTimeout(() => {
                                window.location.href = '/login';
                            }, 3000);
                        } else {
                            setError("Ha ocurrido un error al guardar tus datos");
                        }
                    })
                    .catch(err => console.log(err))

        // }
        // else {
        //     console.log("La contraseña debe tener minimo 10 los caracteres ");
        // }
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
                        <input type='text' placeholder='Nombre' maxlength="15" required value={name} onChange={e => setName(e.target.value)} style={{ width: '100%' }} />
                        <input type='text' placeholder='Apellido' maxlength="40" required value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: '100%' }} />
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder='Correo electrónico' maxlength="30" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Contraseña' maxlength="12" required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Repetir contraseña' maxlength="15" required value={rePassword} onChange={e => setRePassword(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='dateRegister' required style={{ textAlign: 'left', fontWeight: '500', fontSize: '.8rem' }}>Fecha de nacimiento: <span style={{ color: '#ccc' }}>DD/MM/AA</span></label>
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
                        <select value={typeDNI} required onChange={e => setTypeDNI(e.target.value)} style={{ outline: 'none', borderRadius: '4px', padding: '0.7rem', fontSize: '.9rem', background: 'var(--white)', border: '1px solid #eef' }}>
                            <option value='CC'>Cédula de ciudadanía</option>
                        </select>
                        <input type='number' maxlength="10" required placeholder='Número de cédula' style={{ width: '100%' }} value={numberDNI} onChange={e => setNumberDNI(e.target.value)} />
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
                        error && <h3 style={{ color: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>{error}</h3>
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