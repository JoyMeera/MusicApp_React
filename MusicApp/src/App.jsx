import { useState } from 'react'
import { ArtistForm, ArtistMusicList } from './components'
import './App.css'

function App() {
  const [like, setLike] = useState(false)
  const [song, setSong] = useState('')
  return (
    <>
      <ArtistForm song={song} setSong={setSong}/>
      <ArtistMusicList like={like} setLike={setLike}/>
    </>
  )
}

export default App
