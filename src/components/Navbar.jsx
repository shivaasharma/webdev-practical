import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '20px 40px', 
      background: '#fff', 
      borderBottom: '1px solid #e5e4e7',
      boxShadow: '0 4px 6px -2px rgba(0,0,0,0.05)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Home</Link>
      <Link to="/bollywood" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Bollywood</Link>
      <Link to="/hollywood" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Hollywood</Link>
      <Link to="/technology" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Technology</Link>
      <Link to="/fitness" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Fitness</Link>
      <Link to="/food" style={{ textDecoration: 'none', color: '#08060d', fontWeight: 'bold', fontSize: '1.1rem' }}>Food</Link>
    </nav>
  );
};

export default Navbar;
