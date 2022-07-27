import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ImgHands from '../assets/core-feature.png';
import iconOne from '../assets/iconOne.png';
import iconTwo from '../assets/iconTwo.png';
import iconThree from '../assets/iconThree.png';
import iconAvatar from '../assets/avatar.png';
import iconFour from '../assets/iconFour.png';
import iconFive from '../assets/iconFive.png';
import Github from '../assets/Github.png';
import Amazon from '../assets/Amazon.png';
import GoogleWallet from '../assets/GoogleWallet.png';
import Paypal from '../assets/Paypal.png';

let infoFindMe = [
    {
        title: 'Visualizar ofertas y empresas registradas',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: iconOne
    },
    {
        title: 'Personalizar tu perfil',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: iconTwo
    },
    {
        title: 'Aplicar a vacantes',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: iconThree
    }
]

let steps = [
    {
        step: '01',
        title: 'Regístrate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec'
    },
    {
        step: '02',
        title: 'Inicia sesión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec'
    },
    {
        step: '03',
        title: 'Personaliza tu perfil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec'
    },
    {
        step: '04',
        title: 'Aplica a las ofertas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec'
    }
]

let team = [
    {
        name: 'Jesus Felipe Chamorro Martinez',
        specialty: 'Web developer'
    },

    {
        name: 'Arlex Samir Lizarazo Pimienta',
        specialty: 'Web developer',
    },
    {
        name: 'Angie Moya Urbina',
        specialty: 'Web developer',
    },
    {
        name: 'Dorelys Martínez',
        specialty: 'Mobile developer',
    },
    {
        name: 'Karla',
        specialty: 'Mobile developer',
    },
    {
        name: 'Juan Camilo Barrios',
        specialty: 'Mobile developer',
    }
]

let extraInfo = [
    {
        title: 'Unete a la comunidad',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: iconFour,
    },
    {
        title: 'Comunicación de chat',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: iconFive,
    },
    {
        title: 'Acceso a Github',
        description: 'Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, ec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu, Pellentesque feugiat molestie enim a aliquam.',
        icon: Github,
    }
]

function Home({ isLoggedIn }) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <div
                    style={{
                        margin: '9rem auto 4rem',
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            lineHeight: '1.5',
                            fontWeight: '600'
                        }}
                    >
                        Encuentra el empleo <br /> que se ajuste a ti
                    </h1>
                    <p
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            marginBottom: '1.5rem'
                        }}
                    >
                        En esta plataforma podrás encontrar empresas, ofertas, y postulantes.<br />Todo en un solo lugar.
                    </p>
                    <button
                        style={{
                            background: 'var(--blueMedium)',
                            color: 'var(--white)',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            padding: '.75rem 2.5rem',
                            borderRadius: '16px',
                            outline: 'none',
                            border: 'none'
                        }}
                    >
                        Explorar
                    </button>
                </div>
                <div id='imgHands'>
                    <img
                        style={{
                            width: 'auto',
                            height: '80%'
                        }}
                        src={ImgHands}
                        alt='Dos personas dándose un apretón de manos.'
                    />
                </div>
                <div
                    style={{
                        margin: 'auto',
                        textAlign: 'center'
                    }}
                >
                    <span
                        style={{
                            color: 'var(--blueGreen)',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            display: 'block',
                            marginBottom: '.5rem'
                        }}
                    >
                        ¿Qué te ofrecemos?
                    </span>
                    <h2
                        style={{
                            marginBottom: '6rem'
                        }}
                    >
                        Conoce lo que te ofrece Find Me
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            maxWidth: '90%',
                            margin: '0 auto 4rem auto',
                            gap: '1rem',
                        }}
                    >
                        {
                            infoFindMe.map((info, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div
                                            style={{
                                                margin: '0 auto 2.5rem',
                                                borderRadius: '50%',
                                                background: '#e4ecf4',
                                                width: '250px',
                                                height: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                alignContent: 'center'
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: '50%',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }}
                                                src={info.icon}
                                                alt='Icono'
                                            />
                                        </div>
                                        <h3
                                            style={{
                                                height: '4rem',
                                                fontSize: '1.5rem',
                                                fontWeight: '500',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            {info.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '1rem',
                                                fontWeight: '400',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            {info.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        background: '#0179b1',
                        padding: '2rem',
                        textAlign: 'center',
                        color: 'var(--white)',
                    }}
                >
                    <span
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            display: 'block',
                            margin: '3rem 0'
                        }}
                    >
                        Como funciona
                    </span>
                    <h2
                        style={{
                            fontSize: '2rem',
                            marginBottom: '6rem'
                        }}
                    >
                        Vamos a ver cómo funciona
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '10%', width: '100%',
                            margin: '0 auto'
                        }}
                    >
                        {
                            steps.map((step, index) => {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                width: '150px',
                                                height: '150px',
                                                borderRadius: '50%',
                                                background: 'var(--white)',
                                                color: 'var(--black)',
                                                fontSize: '2.5rem',
                                            }}
                                        >
                                            {step.step}
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: '1.75rem',
                                                height: '3rem',
                                                marginTop: '1.5rem',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontsize: '1.5em',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        padding: '2rem',
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                >
                    <span
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            display: 'block',
                            margin: '3rem 0',
                            color: 'var(--blueGreen)'
                        }}
                    >
                        Nuestro equipo
                    </span>
                    <h2
                        style={{
                            fontSize: '2rem',
                            marginBottom: '6rem'
                        }}
                    >
                        Las personas más calificadas y talentosas
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridTemplateRows: 'repeat(2, 1fr)',
                            maxWidth: '90%',
                            margin: '0 auto',
                            gap: '2rem',
                        }}
                    >
                        {
                            team.map((member, index) => {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                width: '250px',
                                                height: '250px',
                                                borderRadius: '50%',
                                                background: 'var(--white)',
                                                color: 'var(--black)',
                                                fontSize: '2.5rem',
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: '100%'
                                                }}
                                                src={iconAvatar}
                                                alt='Avatar'
                                            />
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: '1.25rem',
                                                margin: '1rem 0',
                                                fontWeight: '600',
                                                color: 'var(--blueDark)'
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p
                                            style={{
                                                fontsize: '1.5rem',
                                                fontWeight: '400',
                                                color: 'var(--blue)'
                                            }}
                                        >
                                            {member.specialty}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            maxWidth: '90%',
                            margin: '0 auto 4rem auto',
                            gap: '1rem',
                        }}
                    >
                        {
                            extraInfo.map((extra, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div
                                            style={{
                                                margin: '0 auto .5rem',
                                                borderRadius: '50%',
                                                background: 'var(--white)',
                                                width: '250px',
                                                height: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                alignContent: 'center'
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: '50%',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }}
                                                src={extra.icon}
                                                alt='Icono'
                                            />
                                        </div>
                                        <h3
                                            style={{
                                                height: '4rem',
                                                fontSize: '1.5rem',
                                                fontWeight: '500',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            {extra.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '1rem',
                                                fontWeight: '400',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            {extra.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div
                    style={{
                        borderBottom: '2px solid var(--blueGreen)',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '2rem',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            color: 'var(--blueGreen)'
                        }}
                    >
                        Algunas empresas participantes
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridTemplateRows: 'repeat(1, 1fr)',
                            gap: '5rem',
                            maxWidth: '40%',
                            margin: '0 auto 8rem auto',
                        }}
                    >
                        <img
                            style={{
                                width: '100%',
                                margin: 'auto',
                            }}
                            src={Paypal}
                            alt='Logo Paypal'
                            />
                        <img
                            style={{
                                width: '100%',
                                margin: 'auto',
                            }}
                            src={Amazon}
                            alt='Logo Amazon'
                            />
                        <img
                            style={{
                                width: '100%',
                                margin: 'auto',
                            }}
                            src={GoogleWallet}
                            alt='Logo Google Wallet'
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;