import React, { useContext } from 'react';
import { UserContext } from './UserContext.js';

export const AboutScreen = () => {
	const { user, setUser } = useContext(UserContext);
    const handleClick = () => {
        setUser({});
    }
	return (
		<div>
			<h1>About Screen</h1>
			<pre>{JSON.stringify(user, null, 3)}</pre>
			<button className="btn btn-warning" onClick={handleClick}>
				LogOut
			</button>
		</div>
	);
};
