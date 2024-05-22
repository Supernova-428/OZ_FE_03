import React from 'react'
import { imageBasePath } from '../../constant'

const MovieModal = ({backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen}) => {
  return (
    <div className='presentation' role='presentation'>
        <div className='wrapper-modal'>
            <div className='modal'>
                <span onClick={() => setModalOpen(false)} className='modal-close'>
                    X
                </span>
                <img className='modal_poster-img' src={`${imageBasePath}${backdrop_path}`} />
                <p className='modal_details'>
                    <span>
                        100% for you
                    </span>{' '}
                    {release_date ? release_date : first_air_date}
                </p>
                <h2 className='modal_title'>
                    {title ? title : name}
                </h2>
                <p className='modal_overview'>
                    평점: {vote_average}
                </p>
                <p className='modal_overview'>
                    {overview}
                </p>
            </div>
        </div>
    </div>
  )
}

export default MovieModal