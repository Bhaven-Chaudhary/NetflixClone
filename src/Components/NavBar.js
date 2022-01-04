import React from 'react'
import netflixLogo from '../netflixLogo.png'
import classes from './NavBar.module.css'

export default function NavBar() {
    return (
        <>
            <div className={classes.navbar}>
                <img src={netflixLogo} alt="Netflix" />
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New and Popular</li>
                    <li>My List</li>
                </ul>
                <div>

                </div>
            </div>


        </>
    )
}
