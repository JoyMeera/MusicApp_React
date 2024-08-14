import React from 'react'

export default function ArtistMusicList({songs, setSong}) {

  const toggleLike = (index) => {
    const newSongs = [...songs];
    newSongs[index].like = !newSongs[index].like;
    setSong(newSongs);
  };

  return (
    <div>
      <ul>
            {songs.map((song,i)=>(
              <li className="music-item" key={i}>
                <span>{song.name}</span>
                <span>{song.releaseDate}</span>
                <img className="cover-art" src={song.coverArt} alt="Album Image"/>
                <button onClick={() => toggleLike(i)}>{song.like ? "You love this" : "Like"}</button>
                </li>
            ))} 
      </ul>
    </div>
  )
}
