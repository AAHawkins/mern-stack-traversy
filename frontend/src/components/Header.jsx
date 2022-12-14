import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Goalsetter</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaSignInAlt /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
