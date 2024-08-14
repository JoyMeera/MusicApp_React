import React from 'react'
import { ArtistForm, ArtistMusicList } from '../../components';
import { useSong } from '../../contexts';

export default function Artist() {
  const { songs, setSong } = useSong();
  console.log(songs);
  return (
    <>
        <ArtistForm /> 
        <ArtistMusicList songs={songs} setSong={setSong}/>
    </>
  )
}

