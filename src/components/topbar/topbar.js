/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

function TopBar({ userSession, setUserSession }) {
  const [loginLink, setLoginLink] = useState('hidden');
  const [signoutLink, setSignoutLink] = useState('hidden');
  const [authlinks, setAuthLinks] = useState();
  const location = useLocation();

  useEffect(() => {
    if (userSession) {
      setAuthLinks('hidden');
      setSignoutLink('');
    } else {
      setAuthLinks('');
      setSignoutLink('hidden');
      if (location.pathname === '/signup') setLoginLink('');
      else { setLoginLink('hidden'); }
    }
  }, [location]);

  const signUserOut = () => {
    setAuthLinks('');
    setSignoutLink('hidden');

    localStorage.clear();
    setUserSession(null);
  };

  return (
    <div className="topbar">
      <NavLink to="/signup" className={(isActive) => `${authlinks} auth-link${isActive.isActive ? ' hidden' : ''}`}>
        Signup
      </NavLink>

      <NavLink
        to="/login"
        className={(isActive) => `${authlinks} ${loginLink} auth-link${isActive.isActive ? ' hidden' : ''}`}
      >

        Login
      </NavLink>

      <NavLink to="/login" className={signoutLink} onClick={() => signUserOut()}>
        Sign out
      </NavLink>
    </div>
  );
}

TopBar.propTypes = {
  userSession: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.oneOf(['null', 'undefined']),
  ]),
  setUserSession: PropTypes.func,
};

export default TopBar;
