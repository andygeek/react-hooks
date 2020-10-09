import React from 'react';
import { TodoApp } from './components/TodoApp.jsx';

export const App = () => {
	console.log("Renderizando primer componente");
	return (
		<div className="container">
			<TodoApp />
		</div>
	);
};
