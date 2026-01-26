import { FormEvent, useState } from "react";
import { useLogin } from '../../hooks/useAuth';

export const Login = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

  const login = useLogin()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    try {
      await login.mutateAsync({ email, password }).then((data) => {
				props.onLoginSubmit(data.token);
			});
    } catch (error) {
      // Error is handled by mutation
      console.error('Login failed:', error)
    }
	};

	return (
		<div className="login">
			<div className="login-container">
				<div className="logo-container">
					<img className="logo-big" src="/logo.png" alt="icon"/>
				</div>
				<h2>Sign In</h2>
				<form onSubmit={handleSubmit}>
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
		</div>
	);
}