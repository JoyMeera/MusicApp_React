import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <>
        <h1>About</h1>
        <p>This music application is build on React frameork and might do amazing things in the future. Enjoy</p>
        <button onClick={()=>navigate('/Artist')}>Back to Music Page</button>
    </>
  )
}
