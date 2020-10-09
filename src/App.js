import React from 'react';
import { CounterApp } from './components/CounterApp.jsx';

export const App = () => {
	console.log("Renderizando primer componente");
	return (
		<div className="container">
			<CounterApp />
		</div>
	);
};
