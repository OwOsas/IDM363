import React, { useState } from 'react';
import './header.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = ({ logo }) => {
  const [isBurgerActive, setBurgerState] = useState(false);

  function burgerClick() {}
  return (
    <header>
      <div
        className={
          isBurgerActive ? 'header_container ' + 'active' : 'header_container'
        }
      >
        <Link onClick={() => setBurgerState(false)} to='/'>
          <img src={logo} alt='' />
        </Link>
        <div
          onClick={() => setBurgerState(!isBurgerActive)}
          className={isBurgerActive ? 'burger ' + 'active' : 'burger'}
        ></div>
        <ul className={isBurgerActive ? 'active' : ''}>
          <HeaderLink onClick={() => setBurgerState(false)} to='/portfolio'>
            Portfolio
          </HeaderLink>
          <HeaderLink onClick={() => setBurgerState(false)} to='/resume'>
            Resume
          </HeaderLink>
          <HeaderLink onClick={() => setBurgerState(false)} to='/contact'>
            Contact Me
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
