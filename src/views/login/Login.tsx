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

type LoginData = {
	email: string;
	password: string;
}

const TEST_LOGIN_DATA: LoginData = {
	email: 'antihero989@gmail.com',
	password: 'lel'
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
		props.onLoginSubmit();
	};

	return (
		<div className="login">
			{
				isPending
					? (
						<div>Loading...</div>
					)
					:	(
						<div className="login-container">
							<h1>Tune Dash</h1>
							<h2>Sign In</h2>
							<form onSubmit={onSubmit}>
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="email">Email</label>
									</div>
									<div className="form-input">
										<input
											id="email"
											type="text"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Enter your username"
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="password">Password</label>
									</div>
									<div className="form-input">
										<input
											id="password"
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Enter your password"
											required
										/>
									</div>
								</div>
								<button type="submit">Sign In</button>
							</form>
							<div className="forgot-password">
								<a href="#">Forgot password?</a>
							</div>
						</div>
					)
			}
		</div>
	);
}