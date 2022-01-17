import React, { useContext } from 'react'
import searchicon from '../../logos/searchicon.png'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'
import { useState, useEffect } from 'react'
import AuthContext from '../../store/auth-context'


export default function NavBar() {
    const [isScroll, setIsScroll] = useState(false)
    const ctx = useContext(AuthContext)

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


    const logouthandler = () => {
        console.log('inside logout')
        // ctx.setIsLoggedin(false)
    }


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

                    {/* custom select */}

                    <div className={classes.container}>

                        <div className={classes.selectBox}
                            onMouseEnter={() => {
                                document.getElementById('optionsContainer').classList.add(classes.selectActive);
                                document.getElementById('arrow').style.transform = 'rotate(270deg)'
                            }}
                            onMouseLeave={() => {
                                document.getElementById('optionsContainer').classList.remove(classes.selectActive);
                                document.getElementById('arrow').style.transform = 'rotate(90deg)'
                            }}
                        >
                            <div className={classes.selected}>

                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='account' />
                                <p id='arrow'>&gt;</p>
                            </div>

                            <div id='optionsContainer' className={`${classes.optionsContainer} ${classes.selectActive} `} >
                                <div className={classes.option}>
                                    <button onClick={logouthandler}>Logout</button>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}
