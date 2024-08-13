import React from 'react'

export default function ArtistForm(song, setSong) {

// function updateList(e){
//   e.preventDefault();
//   console.log(e.target.value);
//   setSong(e.target.value)
// }
  return (
    <form>
        <h1 className='banner'>Imagine Dragons</h1>
        <img className='band-Picture' src="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio/artists/2_Imagine_Dragons_by_Eric_Ray_Davidson_GREEN_04_1-1.jpg" alt="Band Image"/>
        <h3>Genre : Pop</h3>
        <p>Formed in 2009, the band greatly expanded their fanbase with the release of their multi-platinum breakthrough single “It’s Time” (featured on the 2012 EP Continued Silence). With their past hits also including “Radioactive” (a diamond-selling smash that won Best Rock Performance at the 2014 Grammy Awards), Imagine Dragons went on to see Smoke + Mirrors debut at #1 on the Billboard Top 200 album chart upon its release in early 2015.</p>
        {/* <label>Which is your favorite song?</label>
        <input type='text'/>
        <button type="submit">Submit</button> */}
        <hr></hr>
    </form>
  )
}
  