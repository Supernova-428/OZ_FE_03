import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'
import axios from '../api/axios'

const Row = ({title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([])

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
  },[fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left'>
          <span className='arrow'>
            {'<'}
          </span>
        </div>
        <div id={id} className='row_posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row_poster'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider_arrow-right'>
          <span className='arrow'>
            {'>'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Row