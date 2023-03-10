import './Style/login.css'
import { signUp, signIn } from './Functions/firebaseFunctions';
import { useState } from 'react';
function LoginPage() {
	let [creds, setCreds] = useState({});
	let [signupLoading, setSignupLoading] = useState(false);
	let [loginLoading, setLoginLoading] = useState(false);
	return (
		<div className="loginContainer">
			<div className="login">
				<div className="loginForm">
					<h1>Login</h1>
					<div className="loginBox">
						<p>or use your account</p>
						<input type="email" placeholder="Email" onChange={(e) => { setCreds((prev) => { prev.email = e.target.value; return prev }) }} />
						<input type="password" placeholder="Password" onChange={(e) => { setCreds((prev) => { prev.password = e.target.value; return prev }) }} />
						<p className="forgotPass loginLink">Forgot your password?</p>
						{
							loginLoading ?
								<div className='loginLoader'>
									<img src="https://i.stack.imgur.com/hzk6C.gif" alt="" />
								</div> :
								<button onClick={() => {
									setLoginLoading(true);
									signIn(creds)
										.then((res) => {
											console.log(res.user.uid);
											setLoginLoading(false)
										})
										.catch((err) => {
											console.log(err);
											setLoginLoading(false)
										})
								}}>Log In</button>
						}
						{
							signupLoading ?
								<div className='loginLoader'>
									<img src="https://i.stack.imgur.com/hzk6C.gif" alt="" />
								</div> :
								<button onClick={() => {
									setSignupLoading(true);
									signUp(creds)
										.then((res) => {
											console.log(res.user.uid);
											setSignupLoading(false)
										})
										.catch((err) => {
											console.log(err);
											setSignupLoading(false)
										})
								}}>Sign Up</button>
						}
					</div>
				</div>
				<div className="redForm">
					<h1>HTML CSS Login <br />
						Form</h1>
					<p>This login form is created using pure
						HTML and CSS. For social icons.
						FontAwesome is used.
					</p>
				</div>
			</div>
		</div>
	)
}
export default LoginPage;