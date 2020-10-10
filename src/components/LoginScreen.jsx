import React, { useContext } from 'react';
import { UserContext } from './UserContext.js';

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	return (
		<div>
			<h1>Login Screen</h1>
			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: 123,
						name: 'Fernandillo',
					})
				}
			>
				Login
			</button>
		</div>
	);
};
