import { useState } from 'react'
import { ArtistForm, ArtistMusicList } from './components'
import {Home, About} from './pages';
import Nav from './Nav';
import './App.css';
import{Routes, Route} from "react-router-dom";

function App() {
  const [inputText, setText] = useState('')
  const [songs, setSong] = useState([
    {
      name : "Thunder",
      releaseDate: "27-04-2017",
      coverArt: "https://assets.mycast.io/actor_images/actor-thunder-imagine-dragons-281964_large.jpg?1633635218",
      like: false
    },
    {
      name : "Nights vision",
      releaseDate: "04-09-2012",
      coverArt: "https://static.s123-cdn-static-d.com/uploads/8611142/normal_664c8c8d2e5c2.png",
      like: false
    },
    {
      name : "Smoke + Mirrors",
      releaseDate: "13-02-2015",
      coverArt: "https://static.qobuz.com/images/covers/77/23/0060254762377_600.jpg",
      like: false
    }])

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="About" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/Music" element={<><ArtistForm inputText={inputText} setText={setText} songs={songs}/> 
          <ArtistMusicList songs={songs} setSong={setSong}/></>}/>
          <Route path="*" element={<h1>404 Error</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
