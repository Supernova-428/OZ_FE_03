import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../api/axios'
import Requests from '../api/requests'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
      fetchData()

    }, [])

    const fetchData = async() => {
        // 현재 상영중인 영화 정보를 가져오기 (여러 영화)
        const response = await axios.get(Requests.fetchNowPlaying)
        // 여러 영화 중 영화 하나의 ID를 가져오기
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id
        // 특정 영화의 상세정보 가져오기
        const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
            params: {append_to_response: 'videos'}
        })
        setMovie(movieDetail)
    }

  return (
    <div>Banner</div>
  )
}

export default Banner