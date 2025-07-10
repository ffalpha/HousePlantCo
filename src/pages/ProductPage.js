import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: `${process.env.PUBLIC_URL}/img/aloe.jpg` },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Air Purifiers', image: `${process.env.PUBLIC_URL}/img/snake.jpg` },
  { id: 3, name: 'ZZ Plant', price: 20, category: 'Low Light', image: `${process.env.PUBLIC_URL}/img/zz.jpg` },
  { id: 4, name: 'Peace Lily', price: 12, category: 'Air Purifiers', image: `${process.env.PUBLIC_URL}/img/lily.jpg` },
  { id: 5, name: 'Pothos', price: 8, category: 'Low Light', image: `${process.env.PUBLIC_URL}/img/pothos.jpg` },
  { id: 6, name: 'Echeveria', price: 6, category: 'Succulents', image: `${process.env.PUBLIC_URL}/img/echeveria.jpg` }
];


function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = id => cartItems.some(i => i.id === id);

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '12px'
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px' }}>Our Plants</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {plants.map(p => (
            <div
              key={p.id}
              style={{
                border: '1px solid #ddd',
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}
            >
              <img src={p.image} alt={p.name} style={{ width: '100%', borderRadius: '6px' }} />
              <div style={{
                fontWeight: 'bold',
                marginTop: '8px',
                fontSize: '1rem'
              }}>{p.name} - ${p.price}</div>

              <div style={{
                margin: '6px 0',
                fontSize: '0.8rem',
                color: '#666',
                backgroundColor: '#f3f4f6',
                padding: '2px 6px',
                borderRadius: '4px',
                display: 'inline-block'
              }}>{p.category}</div>

              <button
                onClick={() => dispatch(addItem(p))}
                disabled={isInCart(p.id)}
                style={{
                  marginTop: '10px',
                  padding: '8px 14px',
                  backgroundColor: isInCart(p.id) ? '#ccc' : '#facc15',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: isInCart(p.id) ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {isInCart(p.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
