/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import './auth.scss';
import { login } from '../../redux/auth/login';

function LoginForm({ setUserSession, userSession }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const signupSuccess = useSelector((state) => state.signUp.success);
  //   const location = useLocation();

  // useEffect(() => {
  //     if (userSession && location.pathname === '/login') navigate('/');
  //   }, [location]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    const response = await fetch('https://protected-sea-38971.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });
    if (response.ok) {
      const session = await response.json();
    // now here you can manipulate the data received from the server side
    // can dispatch calls to the redux state, so it can store the login session for later use
    // afterward, you can then navigate to another component by using navigate(VIEW_URL)
    }
  };
  return (
    <div className="container page-login">

      <form className="login-form" onSubmit={onSubmit}>
        {/* <p className="success-message">{signupSuccess}</p> */}

        <div className="add-padding-below">
          <input
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
            type="password"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-bottom-bar">
          <button type="submit" className="submit-button" size="main" color="dark">Login</button>
        </div>
      </form>

    </div>
  );
}

// eslint-disable-next-line react/no-typos
// LoginForm.propTypes = {
//   userSession: PropTypes.oneOfType([
//     PropTypes.objectOf(PropTypes.string),
//     PropTypes.oneOf(['null', 'undefined']),
//   ]),
// };

export default LoginForm;
