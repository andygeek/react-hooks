import React, { useState } from 'react';

export const CounterApp = () => {
	const [counter, setCounter] = useState(0);
    console.log('Renderizando componente counter');
	return (
		<>
			<h1>Counter App</h1>
			<hr />
			<h3>Counter : {counter}</h3>
			<button
				className="btn btn-primary mr-2"
				onClick={() => {
					setCounter(counter - 1);
				}}
			>
				-1
			</button>
			<button
				className="btn btn-success"
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+1
			</button>
		</>
	);
};
