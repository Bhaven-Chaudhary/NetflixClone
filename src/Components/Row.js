import React, { useState, useEffect } from 'react'
import classes from './Row.module.css'

let movieList;
const posterBasePath = 'https://image.tmdb.org/t/p/original'

export default function (props) {
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
            return <img key={movie.id} className={`${classes.rowPoster} ${trendingRow ? classes.rowPosterTrending : ''}`} key={movie.id} src={`${posterBasePath}${trendingRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
        })

    }

    return (
        <div className={classes.row}>
            <h1>{title}</h1>
            {error && <h1>{error}</h1>}
            <div className={classes.rowPosters}>
                {movieList}
            </div>
        </div>
    )
}
