import React from 'react'
import searchicon from '../logos/searchicon.png'
import { NavLink } from 'react-router-dom'

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
            window.removeEventListener('scroll', () => { })
        }
    }, [])





    return (
        <>


            <div className={classes.gradient}></div>
            <div className={`${classes.navbar} ${isScroll ? classes.navDark : ''}`}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
                <ul>
                    <li>
                        <NavLink activeClassName={classes.activeLink} to='/' exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.activeLink} to='/tv'> TV Shows</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.activeLink} to='/movie'>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.activeLink} to="/popular">New and Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"> My List</NavLink>
                    </li>
                </ul>
                <div className={classes.accounts}>
                    <img src={searchicon} style={{ height: '1.5vw' }} alt="Search" />
                    <p>Children</p>
                    <i className="fa fa-bell"></i>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='account' />
                </div>
            </div>


        </>
    )
}
