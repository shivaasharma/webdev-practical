import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
    const {id} = useParams()

    const post = Data.find((item) => item.id === parseInt(id));

    if(!post){
        return <div style={{ padding: '20px', textAlign: 'center' }}><h2>Post not found</h2></div>;
    }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to={`/${post.category.toLowerCase()}`} style={{ display: 'inline-block', marginBottom: '20px', color: '#aa3bff', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Back to {post.category}
      </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '15px', color: '#08060d' }}>{post.title}</h1>
      <span style={{ display: 'inline-block', padding: '6px 14px', background: '#aa3bff', color: 'white', borderRadius: '20px', marginBottom: '30px', fontSize: '0.9rem', fontWeight: 'bold' }}>
        {post.category}
      </span>
      
      <div style={{ width: '100%', height: '450px', overflow: 'hidden', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
        <img src={post.img_url} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#4a4a4a' }}>{post.description}</p>
    </div>
  )
}

export default Details
