import React, { useState, useEffect } from 'react'
import Routes from './Routes/Route'

function App() {

	let [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsLoggedIn(true);
		}
	}, []);


	return (
		<Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
	)

}

export default App

