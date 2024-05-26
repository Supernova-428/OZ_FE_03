import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from '../../api/axios'
import {imageBasePath} from '../../constant'
import './DetailPage.css'

const DetailPage = () => {

  const {movieId} = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(`/movie/${movieId}`)
      setMovie(response.data)
    }
    fetchData()
  }, [movieId])
  console.log(movie)
  
  if (!movie) return null

  return (
    <section className='detail_section'>
      <img className='detail_img' src={`${imageBasePath}${movie.backdrop_path}`} alt='detail'/>
      <h1 className='detail_title'>
        {movie.title ? movie.title : movie.name}
      </h1>
      <p className='detail_voteAverage'>
        평점: {movie.vote_average}
      </p>
      <h3>
        장르
      </h3>
      <p className='detail_genres'>
        {movie.genres.map((genre) => {
          return <span className='detail_genre' key={genre.id}>{genre.name}</span>
        })}
      </p>
      <h3>
        줄거리
      </h3>
      <p className='detail_overview'>
        {movie.overview}
      </p>
    </section>
  )
}

export default DetailPage