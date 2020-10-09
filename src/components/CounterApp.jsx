import React from 'react';
import { useCounter } from '../hooks/useCounter.js';

export const CounterApp = () => {
	const { counter, increment, decrement } = useCounter(5);
	console.log(':D');

	return (
		<>
			<h1>Counter App</h1>
			<hr />
			<h3>Counter : {counter}</h3>
			<button
				className="btn btn-primary mr-2"
				onClick={() => {
					decrement(1);
				}}
			>
				-1
			</button>
			<button
				className="btn btn-success"
				onClick={() => {
					increment(1);
				}}
			>
				+1
			</button>
		</>
	);
};
