import React from 'react'
//import netflixLogo from '../netflixLogo.png'
import classes from './NavBar.module.css'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const [isScroll, setIsScroll] = useState(false)

    // code to detect scroll and change navbar color
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setScroll(window.scrollY)
    //     }, 500);

    //     return () => clearInterval(intervalId);
    // }, [setScroll]);

    //alternate function to listen to scroll
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    console.log(isScroll)



    return (
        <>


            <div className={classes.gradient}></div>
            <div className={`${classes.navbar} ${isScroll ? classes.navDark : ''}`}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New and Popular</li>
                    <li>My List</li>
                </ul>
                <div className={classes.accounts}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='account' />
                </div>
            </div>


        </>
    )
}
