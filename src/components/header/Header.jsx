import React, { useState } from 'react';
import css from './header.css';
import { magnifier, arrow, cart } from '../../img/icons';
import { useContext } from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = ({ logo }) => {
  return (
    <header>
      <div className='header'>
        <Link className='logo' to='/'>
          <img src={logo} alt='' />
        </Link>
        {/* <div className='searchBar'>
          <input type='text' placeholder='Search...' />
          <button>
            <img src={magnifier} alt='' />
          </button>
        </div> */}
        <ul>
          <HeaderLink to='/LogIn'>Log In / Sign Up</HeaderLink>
          <HeaderLink to='/Cart'>
            Cart
            <span className='cartIcon'>
              <img src={cart} alt='Cart' />
              <span className='itemInCart'>
                <span>1</span>
              </span>
            </span>
          </HeaderLink>
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
