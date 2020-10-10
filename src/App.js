import React from 'react';
import { AppRouter } from './components/AppRouter.jsx';
import { UserContext } from './components/UserContext';

export const App = () => {

	const user = {
		id: 1234,
		name: 'Andy',
		email: 'AndyGeek'
	}

	console.log("Renderizando primer componente");
	return (
		<div className="container">
			<UserContext.Provider value={user}>
				<h1>Main App</h1>
				<hr/>
				<AppRouter />
			</UserContext.Provider>
		</div>
	);
};
