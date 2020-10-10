import React, { useState } from 'react';
import { AppRouter } from './components/AppRouter.jsx';
import { UserContext } from './components/UserContext';

export const App = () => {
	const [user, setUser] = useState({});

	return (
		<div className="container">
			<UserContext.Provider value={{
				user, setUser
			}}>
				<h1>Main App</h1>
				<hr />
				<AppRouter />
			</UserContext.Provider>
		</div>
	);
};
