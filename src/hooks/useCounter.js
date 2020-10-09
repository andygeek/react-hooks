import { useState } from 'react';

export const useCounter = (initialState = 0) => {
	const [counter, setCounter] = useState(initialState);

	const increment = (factor) => {
		setCounter(counter + factor);
	};
	const decrement = (factor) => {
		setCounter(counter - factor);
	};

	return {
		counter,
		increment,
		decrement,
	};
};
