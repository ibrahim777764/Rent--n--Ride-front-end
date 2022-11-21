/* eslint-disable linebreak-style */
/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { signUp } from '../../redux/auth/signup';

function SignupForm({ userSession }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userSession && location.pathname === '/signup') navigate('/');
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.formEntries(formObject.entries());

    dispatch(signUp(data));
    navigate('/login');
  };
  return (
    <div className="container page-login">
      <form className="login-form" method="POST" onSubmit={onSubmit}>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <input
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
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="text"
            id="password"
            name="password_confirmation"
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
