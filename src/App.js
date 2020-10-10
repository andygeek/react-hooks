import React from 'react';
//import { MainApp } from './components/MainApp.jsx';
import { AppRouter } from './components/AppRouter.jsx';
import { UserContext } from './components/UserContext';

export const App = () => {
	console.log("Renderizando primer componente");
	return (
		<div className="container">
			<UserContext.Provider>
				<h1>Main App</h1>
				<hr/>
				<AppRouter />
			</UserContext.Provider>
		</div>
	);
};
