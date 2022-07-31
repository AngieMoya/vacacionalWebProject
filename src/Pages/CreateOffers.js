//import React, { useEffect } from 'react';
import React from 'react';
import Header from '../Components/Header';

function CreateOffers({ isLoggedIn }) {

    /*useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        } else {
            if (JSON.parse(localStorage.getItem('token')).type !== 'recruiter') {
                window.location.href = '/';
            }
        }
    });*/

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            CreateOffers
        </>
    )
}

export default CreateOffers;