import React, { useContext } from 'react';
import { UserContext } from '../../userContext';
import { Link } from 'react-router-dom';

const Chat = () => {
	const {user, setUser} = useContext(UserContext);
	return (
		<div>
			<h1>Chat {JSON.stringify(user)} </h1>
			<Link to='/'>
				<button>Go to HOme</button>
			</Link>
		</div>
	)
}

export default Chat;
