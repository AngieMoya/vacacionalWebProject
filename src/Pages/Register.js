import React, { useState } from 'react';
import Axios from 'axios';

function Register({ isLoggedIn }) {

    if (isLoggedIn) {
        window.location.href = '/';
    }

    let [typeUser, setTypeUser] = useState('');
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

    let [nit, setNit] = useState('');
    let [nameEnterprise, setNameEnterprise] = useState('');
    let [emailEnterprise, setEmailEnterprise] = useState('');
    let [telEnterprise, setTelEnterprise] = useState('');
    let [descriptionEnterprise, setDescriptionEnterprise] = useState('');

    let [error, setError] = useState('');
    let [success, setSuccess] = useState(false);

    function onSubmit() {
        if (typeUser === 'natural') {
            if (name.length === 0) return setError("Los campos del nombre son inválidos");
            if (lastName.length === 0) return setError("Los campos del apellido son inválidos");
            if (email.length === 0) return setError("Debe ingresar un email de registro");
            if (password.length === 0) return setError("Debe ingresar un una contraseña de registro");
            if (rePassword.length === 0) return setError("Debe ingresar un una contraseña de registro");
            if (password !== rePassword) return setError("Las contraseñas no coinciden");
            if (date.length === 0) return setError("No ha ingresado una fecha de nacimiento");
            let dateNow = new Date();
            let yearNow = dateNow.getFullYear();
            if (yearNow - date.split('-')[0] < 18) return setError("Debe ser mayor de edad para registrarse");
            if (yearNow - date.split('-')[0] > 65) return setError("Debe ser menor de 65 años para registrarse");
            if (typeDNI.length === 0) return setError("Elija un tipo de identificación");
            if (numberDNI.length < 8 || numberDNI.length > 10) return setError("Escriba su numero de identificación valido");
            if (profession.length === 0) return setError("Debe proporcionar su profesión");
            if (country.length === 0) return setError("Seleccione su país de residencia");
            setError('');
            let userData = {
                data: {
                    type: typeUser,
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
                        setError("Ha ocurrido un error al guardar tus datos");
                    }
                })
                .catch(err => console.log(err))
        } else if (typeUser === 'enterprise') {
            if (nit.length === 0) return setError("Debe ingresar un NIT");
            if (nameEnterprise.length === 0) return setError("Debe ingresar el nombre de la empresa");
            if (emailEnterprise.length === 0) return setError("Debe ingresar un email de registro");
            if (password.length === 0) return setError("Debe ingresar una contraseña de registro");
            if (rePassword.length === 0) return setError("Debe ingresar una contraseña de registro");
            if (password !== rePassword) return setError("Las contraseñas no coinciden");
            if (telEnterprise.length < 8 || telEnterprise.length > 10) return setError("El número de teléfono no es válido, debe contener entre 8 a 10 caracteres");
            let userData = {
                data: {
                    type: typeUser,
                    name: nameEnterprise,
                    email: emailEnterprise,
                    password,
                    extra_data: {
                        enterprises: {
                            NIT: nit,
                            business_name: nameEnterprise,
                            description: descriptionEnterprise,
                            email: emailEnterprise,
                            cellphone: telEnterprise
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
                        setError("Ha ocurrido un error al guardar tus datos");
                    }
                })
                .catch(err => console.log(err))
        }

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
                    {
                        typeUser === '' &&
                        <div className="input-field">
                            <label htmlFor='typeUser'>Por favor seleccione el tipo de cuenta a crear:</label>
                            <select id='typeUser' value={typeUser} onChange={(e) => e.target.value !== 'nop' && setTypeUser(e.target.value)}>
                                <option value="nop">Seleccione</option>
                                <option value="natural">Personal</option>
                                <option value="enterprise">Empresarial</option>
                            </select>
                        </div>
                    }
                    {
                        typeUser === 'natural'
                            ? <>
                                <div className="input-field gridTwoColumns" >
                                    <input type='text' placeholder='Nombre' maxLength="15" value={name} onChange={e => setName(e.target.value)} required />
                                    <input type='text' placeholder='Apellido' maxLength="40" value={lastName} onChange={e => setLastName(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <input type="email" placeholder='Correo electrónico' maxLength="30" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <input type="password" placeholder='Contraseña' maxLength="12" value={password} onChange={e => setPassword(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <input type="password" placeholder='Repetir contraseña' maxLength="15" value={rePassword} onChange={e => setRePassword(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <label htmlFor='dateRegister' className='labelForm'>Fecha de nacimiento: <span style={{ color: '#ccc' }}>DD/MM/AA</span></label>
                                    <input id='dateRegister' type="date" value={date} onChange={e => setDate(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <label htmlFor='sexRegister' className='labelForm'>Sexo</label>
                                    <select id='sexRegister' value={sex} onChange={e => setSex(e.target.value)} required>
                                        <option value='Mujer'>Mujer</option>
                                        <option value='Hombre'>Hombre</option>
                                        <option value='Personalizado'>Personalizado</option>
                                    </select>
                                </div>
                                <div className='input-field gridTwoColumns' >
                                    <select value={typeDNI} onChange={e => setTypeDNI(e.target.value)} required>
                                        <option value='CC'>Cédula de ciudadanía</option>
                                    </select>
                                    <input type='number' maxLength="10" placeholder='Número de cédula' value={numberDNI} onChange={e => setNumberDNI(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='Profesión' value={profession} onChange={e => setProfession(e.target.value)} required />
                                </div>
                                <div className="input-field gridTwoColumns" >
                                    <select value={country} onChange={e => setCountry(e.target.value)} required>
                                        <option value='Colombia'>Colombia</option>
                                    </select>
                                    <select value={city} onChange={e => setCity(e.target.value)} required>
                                        <option value='Barranquilla'>Barranquilla</option>
                                    </select>
                                </div>
                                {
                                    error !== '' && <h3 style={{ color: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>{error}</h3>
                                }
                                {
                                    success && <h3 style={{ color: 'var(--white)', background: '#039555', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Felicidades, su cuenta ha sido registrada con éxito.</h3>
                                }
                                <button className="button p-btn2" onClick={onSubmit}>Registrarte</button>
                                <a href='/login' className="button p-btn">Iniciar sesión</a>
                                <div className="form-action">
                                    <div className="form-text">
                                        <p id='policyText'>Al hacer click en "Registrarte", aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
                                    </div>
                                </div>
                            </>
                            : typeUser === 'enterprise'
                            && <>
                                <div className="input-field" >
                                    <input type='number' value={nit} onChange={e => setNit(e.target.value)} placeholder='NIT' required />
                                </div>
                                <div className="input-field" >
                                    <input type='text' value={nameEnterprise} onChange={e => setNameEnterprise(e.target.value)} placeholder='Nombre de la empresa' required />
                                </div>
                                <div className="input-field" >
                                    <input type='email' value={emailEnterprise} onChange={e => setEmailEnterprise(e.target.value)} placeholder='Email de la empresa' required />
                                </div>
                                <div className="input-field" >
                                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Contraseña' required />
                                </div>
                                <div className="input-field" >
                                    <input type='password' value={rePassword} onChange={e => setRePassword(e.target.value)} placeholder='Repetir contraseña' required />
                                </div>
                                <div className="input-field" >
                                    <input type='number' value={telEnterprise} onChange={e => setTelEnterprise(e.target.value)} placeholder='+57 300 154 5454' required />
                                </div>
                                <div className="input-field" >
                                    <textarea value={descriptionEnterprise} onChange={e => setDescriptionEnterprise(e.target.value)} placeholder='Descripción de la empresa' style={{ resize: 'none', width: '100%' }} />
                                </div>
                                {
                                    error !== '' && <h3 style={{ color: '#cc0000', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>{error}</h3>
                                }
                                {
                                    success && <h3 style={{ color: 'var(--white)', background: '#039555', padding: '.5rem', width: '100%', borderRadius: '4px', fontSize: '.9rem' }}>Felicidades, su cuenta ha sido registrada con éxito.</h3>
                                }
                                <button className="button p-btn2" onClick={onSubmit}>Registrarte</button>
                                <a href='/login' className="button p-btn">Iniciar sesión</a>
                                <div className="form-action">
                                    <div className="form-text">
                                        <p id='policyText'>Al hacer click en "Registrarte", aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    )

}

export default Register;