import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';

const Header = (props) => {
  const renderMenu = () => {
    if (props.authenticated) {
      return (
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      );
    }
    return (
      <ul>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    );
  };

  return (
    <div className='header'>
      <Link className="logo" to='/'>WEATHER</Link>
      <nav>
        {renderMenu()}
      </nav>
    </div>
  );
};

export default Header;
