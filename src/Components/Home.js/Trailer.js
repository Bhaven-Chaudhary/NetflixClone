import React from 'react'
import YouTube from 'react-youtube';
import classes from './Trailer.module.css'

export default function Trailer(props) {
    const opts = {
        height: '300',
        width: '512',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    return (

        <>
            <div className={classes.backdrop} onClick={() => { props.setMovieUrl("") }}>

                <div className={classes.container}>
                    <YouTube videoId={props.videoID} opts={opts} />
                </div>
            </div>
        </>
    )
}
