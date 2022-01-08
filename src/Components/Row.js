import React, { useState, useEffect } from 'react'
import classes from './Row.module.css'

let movieList;
const posterBasePath = 'https://image.tmdb.org/t/p/original'

export default function Row(props) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    const { title, requestUrl, trendingRow } = props

    useEffect(() => {

        fetch(requestUrl).then(res => {

            if (!res.ok) {
                throw new Error('something went wrong')
            }
            return res.json()
        }
        ).then(data => {
            setMovies(data)
            console.log(data)
        }).catch(error =>
            setError(error.message)
        )
    }, [requestUrl])



    if (movies.length !== 0) {

        movieList = movies.results.map(movie => {
            return <img key={movie.id} className={`${classes.rowPoster} ${trendingRow ? classes.rowPosterTrending : ''}`} src={`${posterBasePath}${trendingRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
        })

    }


    // code to scroll content of rows

    const slideRightHandler = () => {
        document.getElementById(title.replaceAll(' ', '')).scrollLeft += 200;
    }
    const slideLeftHandler = () => {
        document.getElementById(title.replaceAll(' ', '')).scrollLeft -= 200;
    }

    console.log(title.replaceAll(' ', ''))

    return (
        <div className={classes.row}>
            <h1>{title}</h1>
            {error && <h1>{error}</h1>}
            <div id={title.replaceAll(' ', '')} className={classes.rowPosters}>
                {movieList}
            </div>
            <button id='slideLeft' onClick={slideLeftHandler}>Left</button>
            <button id='slideRight' onClick={slideRightHandler}>Right</button>
        </div>
    )
}
