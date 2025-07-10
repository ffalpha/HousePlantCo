import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0));
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div><Link to="/">HousePlant Co.</Link></div>
      <nav>
        <Link to="/products">Products</Link> | <Link to="/cart">🛒 {cartCount}</Link>
      </nav>
    </header>
  );
}

export default Header;