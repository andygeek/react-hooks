import React, { useState, useEffect } from 'react';

export const CounterApp = () => {
	const [counter, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});
	console.log(':D');
	// Destructuring
	const { counter1, counter2, counter3 } = counter;

	// Only execute when counter 2 change
	useEffect(() => {
		console.log("Cambio el segundo numero");
	}, [counter2])

	return (
		<>
			<h1>Counter App</h1>
			<hr />
			<h3>Counter1 : {counter1}</h3>
			<h3>Counter2 : {counter2}</h3>
			<h3>Counter3 : {counter3}</h3>
			<button
				className="btn btn-primary mr-2"
				onClick={() => {
					setCounter({
						...counter,
						counter1: counter1 - 1,
						counter2: counter2 - 2,
						counter3: counter3 - 3,
					});
				}}
			>
				-1
			</button>
			<button
				className="btn btn-success"
				onClick={() => {
					setCounter({
						...counter,
						counter1: counter1 + 1,
						counter2: counter2 + 2,
						counter3: counter3 + 3,
					});
				}}
			>
				+1
			</button>

			<button
				className="btn btn-warning ml-2"
				onClick={() => {
					setCounter({
						...counter,
						counter1: 0,
					});
				}}
			>
				Counter 1
			</button>
		</>
	);
};
