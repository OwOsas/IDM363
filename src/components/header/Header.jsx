import React, { useState } from 'react';
import './header.css';
import { magnifier, arrow } from '../../img/icons';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = ({ logo }) => {
  return (
    <header>
      <div className='header'>
        <Link className='logo' to='/'>
          <img src={logo} alt='' />
        </Link>
        <div className='searchBar'>
          <input type='text' />
          <button>
            <img src={magnifier} alt='' />
          </button>
        </div>
        <ul>
          <HeaderLink to='/portfolio'>Log In / Sign Up</HeaderLink>
          <HeaderLink to='/resume'>Cart</HeaderLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;

function HeaderLink({ to, onClick, children, isBurgerActive, ...porps }) {
  const resolvedPath = useResolvedPath(to);
  const isCurrent = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isCurrent ? 'current' : ''}>
      <Link onClick={onClick} to={to}>
        {children}
      </Link>
    </li>
  );
}
