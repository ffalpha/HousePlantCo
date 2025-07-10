import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div
      style={{
        backgroundImage: 'url(/img/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          padding: '30px',
          borderRadius: '12px'
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Your Cart</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', marginTop: '10px' }}>
          Total Items: {totalItems}
        </p>
        <p style={{ textAlign: 'center', fontSize: '1rem' }}>
          Total Price: ${totalPrice.toFixed(2)}
        </p>

        <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
          {cart.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <img src={item.image} alt={item.name} width="100" style={{ borderRadius: '6px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <h4>{item.name} (${item.price})</h4>
                <p>Quantity: {item.quantity}</p>
                <div>
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    style={btnStyle}
                  >+</button>
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    style={btnStyle}
                  >-</button>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{
                      ...btnStyle,
                      backgroundColor: '#f87171',
                      marginLeft: '10px'
                    }}
                  >Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button
            onClick={() => alert('Checkout Coming Soon')}
            style={{
              backgroundColor: '#facc15',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Checkout
          </button>

          <br /><br />
          <Link to="/products" style={{
            color: 'green',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '6px 12px',
  marginRight: '5px',
  border: 'none',
  backgroundColor: '#d1d5db',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default CartPage;
