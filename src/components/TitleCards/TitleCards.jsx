import React, { useEffect, useState } from 'react'
import "../../components/TitleCards/TitleCards.css"
import {Link} from "react-router-dom"
const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([])

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDdhYjJlZmQwZmU5YzlhMWU0MWJhN2ZmNWUyMGQwOSIsIm5iZiI6MTc3MjA0ODA4NC44NjYsInN1YiI6IjY5OWY0ZWQ0MTdhZjJiNjdhY2YyMDBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r0w7Sm3fQynS2BDI3WkeD_MUILhPI60VTGloqdG2lJ8'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing' }?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
},[category])

  
  return (
    <div className='titleCard'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" >
          {
            apiData.map((card,index)=>{
              return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
            })
          }
        </div>
      </div>
  )
}

export default TitleCards
