/* eslint-disable linebreak-style */
/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import { useState } from 'react';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
import { signUp } from '../../redux/auth/signup';

function SignupForm({ userSession }) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (userSession && location.pathname === '/signup') navigate('/');
  // }, [location]);
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(state));
  };




  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // const formObject = new FormData(e.target);
  //   // const data = Object.formEntries(formObject.entries());
  //   dispatch(signUp(state));
  //   // navigate('/login');
  // };
  return (
    <div className="container page-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <input
            type="text"
            id="name"
            name="username"
            onChange={handle}
            value={state.username}
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handle}
            value={state.email}
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
            onChange={handle}
            value={state.password}
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            id="password"
            name="password_confirmation"
            onChange={handle}
            value={state.password_confirmation}
            className="form-field"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="form-bottom-bar">
          <button type="submit" size="main" className="submit-button" color="dark">Sign up</button>
        </div>
      </form>

    </div>
  );
}

// SignupForm.propTypes = {
//   userSession: PropTypes.oneOfType([
//     PropTypes.objectOf(PropTypes.string),
//     PropTypes.oneOf(['null', 'undefined']),
//   ]),
// };

export default SignupForm;
