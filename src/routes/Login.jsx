/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Button from '../components/button/Button';
import './Login.scss';

function LoginScreen() {
  const loginForm = useRef();
  const name = useRef();
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
          name: name.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://github.com/ibrahim777764/Rent-and-Ride/tree/development/app/controllers/api/v1', requestOptions);
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
            ref={name}
            type="text"
            id="name"
            name="name"
            className="form-field"
            placeholder="Name"
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
