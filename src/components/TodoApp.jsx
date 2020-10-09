import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer.js';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Aprender React',
		done: false,
	},
];

export const TodoApp = () => {
	const [state] = useReducer(todoReducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('new task');
	};

	return (
		<>
			<h1>TodoApp ( {state.length} )</h1>
			<hr />
			<div className="row">
				<div className="col-md-6">
					<ul>
						{state.map((todo, i) => (
							<li key={todo.id}>
								{i + 1} - {todo.desc}
							</li>
						))}
					</ul>
					<button className="btn btn-warning">Borrar</button>
				</div>
				<div className="col-md-6">
					<form action={handleSubmit}>
						<input
							type="text"
							name="description"
							placeholder="Aprender..."
							autoComplete="off"
							className="form form-control"
						/>
						<button className="btn btn-success btn-block mt-2">Agregar</button>
					</form>
				</div>
			</div>
		</>
	);
};
