import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', background: '#333', color: '#fff', padding: '15px', borderRadius: '5px' }}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff' }}>{user.website}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
