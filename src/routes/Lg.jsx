/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Button from '../components/button/Button';
import './Login.scss';

function LoginScreen() {
  const loginForm = useRef();
  const email = useRef();
  const password = useRef();

  const [isActive, setActive] = useState(true);

  const ToggleClass = () => {
    setActive(false);
  };

  const sendForm = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          email: email.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://protected-sea-38971.herokuapp.com/auth/login', requestOptions);
    if (dataResponse.ok) {
      const userData = await dataResponse.json();
      localStorage.setItem('current_user', JSON.stringify(userData));
      window.location.href = '/';
    } else {
      ToggleClass();
    }
  };

  return (
    <div className="container page-login">

      <form action="#" className="login-form" method="POST" ref={loginForm}>
        <h2>LOGIN</h2>

        <div className="add-padding-below">
          <span className={isActive ? 'error-message' : 'error-message active'}>Error with credentials</span>

          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={password}
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <p className="signin-message">
          Don&apos;t have an account yet?
          <Link to="/signup">
            SIGN UP
          </Link>
        </p>

        <div className="form-bottom-bar">
          <Button
            btnAxn={sendForm}
            label="Login"
            size="main"
            color="dark"
          />
        </div>
      </form>

    </div>
  );
}
export default LoginScreen;
