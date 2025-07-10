import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg.jpg)`,

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // white overlay
        zIndex: 1
      }}></div>

      {/* Content */}
      <div style={{
        zIndex: 2,
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '800px'
      }}>
        <h1 style={{ color: '#1a1a1a', fontSize: '3rem', marginBottom: '20px' }}>HousePlant Co.</h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#333',
          marginBottom: '30px'
        }}>
          We bring nature into your home with beautiful, healthy houseplants delivered to your door.
        </p>
        <button
          onClick={() => navigate('/products')}
          style={{
            backgroundColor: '#facc15', // yellow-400
            color: '#000',
            padding: '12px 24px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
