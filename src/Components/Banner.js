import React from 'react'
import { useState, useEffect } from 'react'
import requestUrl from '../requestUrl'
import classes from './Banner.module.css'

export default function Banner() {
    const [bannerMovie, setBannerMovie] = useState([])
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(requestUrl.trendingUrl).then(res => {
            if (!res.ok) {
                throw new Error('something went wrong')
            }
            return res.json()
        }).then(data => {

            setBannerMovie(data.results[Math.floor(Math.random() * data.results.length)])
            console.log("banner data " + data)
        }).catch(error =>
            setError(error.message)
        )
    }, [error])

    const cutDescription = (s) => {
        if (s) {
            s = s.length > 200 ? s.substring(0, 200) + '...' : s;
            console.log(s)
            return s
        }
    }

    return (
        <header className={classes.banner}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`,
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>

            {error && <h1>{error}</h1>}
            {/* <img src={`https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`} alt="banner" /> */}
            <div className={classes.bannerData}>

                <h1>{bannerMovie.title || bannerMovie.name || bannerMovie.original_name}</h1>
                <p>{cutDescription(bannerMovie.overview)}</p>


                <div className={classes.bannerButton}>
                    <button style={{ backgroundColor: 'white' }}><i style={{ fontSize: '1.9vw' }}>&#9654;</i>Play</button>
                    <button style={{
                        color: 'white'
                    }}><i>&#9432;</i>More Info</button>
                </div>
            </div>

        </header >
    )
}
