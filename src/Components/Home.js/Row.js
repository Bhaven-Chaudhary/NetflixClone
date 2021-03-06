import React, { useState, useEffect } from 'react'
import classes from './Row.module.css'
import Trailer from './Trailer'
import movieTrailer from 'movie-trailer'

let movieList;
const posterBasePath = 'https://image.tmdb.org/t/p/original'

export default function Row(props) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const { title, requestUrl, trendingRow } = props
    const [movieUrl, setMovieUrl] = useState("")



    useEffect(() => {

        fetch(requestUrl).then(res => {

            if (!res.ok) {
                throw new Error('something went wrong')
            }
            setError(false)
            return res.json()
        }
        ).then(data => {
            setMovies(data)
            // console.log(data)
        }).catch(error => {

            setError(error.message)
        }
        )
    }, [requestUrl])

    const movieTrailerHandler = (movie) => {

        if (movieUrl) {
            setMovieUrl("")
        } else {
            console.log(movie.title)
            movieTrailer(movie?.title || movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams.get("v"))
                setMovieUrl(urlParams.get("v"))
            }
            ).catch(error => {
                console.log(error)
            })

        }

    }


    if (movies.length !== 0) {

        movieList = movies.results.map(movie => {
            return <img key={movie.id}
                onClick={() => movieTrailerHandler(movie)}
                className={`${classes.rowPoster} ${trendingRow ? classes.rowPosterTrending : ''}`}
                src={`${posterBasePath}${trendingRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title ? movie.title : movie.name}
            />
        })

    }

    // code to scroll content of rows

    const slideRightHandler = () => {
        // document.getElementById(title.replaceAll(' ', '')).scrollLeft += 200;
        document.getElementById(title.replaceAll(' ', '')).scrollBy({ left: 300, top: 0, behavior: 'smooth' });
    }


    const slideLeftHandler = () => {
        // document.getElementById(title.replaceAll(' ', '')).scrollLeft -= 200;
        document.getElementById(title.replaceAll(' ', '')).scrollBy({ left: -300, top: 0, behavior: 'smooth' });
    }



    return (
        <>

            <div className={classes.row}>
                <h1>{title}</h1>
                {error && <h1>{error}</h1>}
                <div className={classes.rowContent}>
                    <button id='slideLeft' onClick={slideLeftHandler}>&lt;</button>
                    <div id={title.replaceAll(' ', '')} className={classes.rowPosters}>
                        {!error && movieList}
                    </div>
                    <button id='slideRight' onClick={slideRightHandler} style={{ right: '0' }}>&gt;</button>
                </div>

            </div>
            {movieUrl && <Trailer videoID={movieUrl} setMovieUrl={setMovieUrl}></Trailer>}
        </>
    )
}
