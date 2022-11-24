import React from 'react';
import './header.css';
import { magnifier, arrow, cart } from '../../img/icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ logo }) => {
  const { cartItems } = useSelector((state) => state.cart);
  var cartCount = 0;
  cartItems.map((item) => {
    return (cartCount += item.quantity);
  });
  if (cartCount > 99) {
    cartCount = '99+';
  }
  return (
    <header>
      <div className='header'>
        <Link className='logo' to='/'>
          <img src={logo} alt='' />
          <p>SHARD</p>
        </Link>
        {/* <div className='searchBar'>
          <input type='text' placeholder='Search...' />
          <button>
            <img src={magnifier} alt='' />
          </button>
        </div> */}
        <ul>
          <HeaderLink to='/Listing/create'>Create Listing</HeaderLink>
          <HeaderLink to='/Cart'>
            Cart
            <span className='cartIcon'>
              <img src={cart} alt='Cart' />
              <span
                className='itemInCart'
                style={{ display: cartCount === 0 ? 'none' : '' }}
              >
                <span>{cartCount}</span>
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
