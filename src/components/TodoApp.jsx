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
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: new Date().getTime(),
			desc: 'Nueva tarea',
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
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
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="description"
							placeholder="Aprender..."
							autoComplete="off"
							className="form form-control"
						/>
						<button type="submit" className="btn btn-success btn-block mt-2">Agregar</button>
					</form>
				</div>
			</div>
		</>
	);
};
