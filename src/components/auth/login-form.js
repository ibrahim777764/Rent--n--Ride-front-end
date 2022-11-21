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
  const location = useLocation();

  useEffect(() => {
    if (userSession && location.pathname === '/login') navigate('/');
  }, [location]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    const response = dispatch(login(data));
    if ('token' in response.payload) setUserSession(response.payload);
    navigate('/');
  };
  return (
    <div className="container page-login">

      <form className="login-form" method="POST" onSubmit={onSubmit}>
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
            type="text"
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
