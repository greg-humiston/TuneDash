import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

type Login = {
  email: string;
  password: string;
};

const LOGIN_URL = 'https://tunedash666.azurewebsites.net/api/signIn?code=dJet1NuSK6Q6lWe9HO4P4bWCaJzhDfJoYMSjTM8HnVHRAzFuVOLJ5Q%3D%3D';

const signInMutationFn = async (data: Login) => {
	console.log('signInMutationFn, data:', data);
  const responseData = await fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
		}
  });

	return responseData;
};

export const Login = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const { mutate, isPending } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: signInMutationFn,
		onSuccess: (data) => {
			data.json().then(props.onLoginSubmit);
		},
		onError: (error) => {
			console.error('Login failed', error);	
		}
	});

	const onSubmit = () => {
		mutate({
			email,
			password
		});
	};

	return (
		<div className="login">
			{
				isPending
					? (
						<div>Loading...</div>
					)
					:	(
						<div>
							<h1>Login</h1>
								<div>
									<span>Email:</span>
									<input 
										type="text" 
										placeholder="Email" 
										onChange={(e) => setEmail(e.target.value)}
										value={email}
									/>
									<span>Password:</span>
									<input 
										type="password" 
										placeholder="Password" 
										onChange={(e) => setPassword(e.target.value)}
										value={password}
									/>
									<button onClick={onSubmit} type="submit">Login</button>
							</div>
						</div>
					)
			}
		</div>
	);
}