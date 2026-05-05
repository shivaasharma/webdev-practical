import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <UserList />
    </div>
  )
}

export default App
