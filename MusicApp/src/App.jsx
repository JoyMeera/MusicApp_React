import { useState } from 'react'
import {Home, About, Artist} from './pages';
import Nav from './Nav';
import './App.css';
import{Routes, Route} from "react-router-dom";
import { SongProvider } from './contexts';

function App() {
  return (
    <>
    <SongProvider>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}/> 
            <Route path="About" element={<About />}/>
            <Route path="/Artist" element={<Artist />}/>
            <Route path="*" element={<h1>404 Error</h1>}/>
          </Route>
        </Routes>
      </SongProvider>
    </>
  )
}

export default App
