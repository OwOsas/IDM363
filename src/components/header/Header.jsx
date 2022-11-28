import React from 'react';
import './header.css';
import { cart } from '../../img/icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ logo }) => {
  //calculate the amount of items in the cart, if > 99, show "99+"
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
          <p>TECNOGEM</p>
        </Link>
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

//A function that can determine if the link is current page
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
