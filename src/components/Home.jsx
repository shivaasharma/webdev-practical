import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data';

const Home = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem', color: '#08060d', textAlign: 'center' }}>Welcome to the React Blog</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px' }}>Check out our latest posts across all categories.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {Data.slice(0, 6).map((data)=>(
          <div key={data.id} style={{ background: '#fff', border: '1px solid #e5e4e7', borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 6px -2px rgba(0,0,0,0.05)' }}>
            <Link to={`/details/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={data.img_url} alt={data.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.8rem', background: '#f4f3ec', padding: '4px 8px', borderRadius: '4px', color: '#aa3bff', fontWeight: 'bold' }}>{data.category}</span>
                <h2 style={{ margin: '10px 0', fontSize: '1.5rem', color: '#08060d' }}>{data.title}</h2>
                <p style={{ margin: 0, color: '#aa3bff', fontWeight: 'bold' }}>Read Details →</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
