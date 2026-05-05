import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom';

const Fitness = () => {
  const categoryData = Data.filter((item)=>item.category==="Fitness");

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem', color: '#08060d' }}>Fitness Articles</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {categoryData.map((data)=>(
          <div key={data.id} style={{ background: '#fff', border: '1px solid #e5e4e7', borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 6px -2px rgba(0,0,0,0.05)' }}>
            <Link to={`/details/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={data.img_url} alt={data.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#08060d' }}>{data.title}</h2>
                <p style={{ margin: 0, color: '#aa3bff', fontWeight: 'bold' }}>Read Details →</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fitness;
