import React from 'react'
import classes from './SignUpPage.module.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <>
            <div className={classes.signupPage} style={{
                backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/8a1bf43e-747e-44e3-a3b6-77a055300254/IN-en-20220103-popsignuptwoweeks-perspective_alpha_website_medium.jpg)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}>

                <div className={classes.signupNavbar}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
                    <div className={classes.signupNavButtons}>
                        <select name="language" id="language">
                            <option >English</option>
                            <option >हिन्दी</option>
                        </select>
                        <Link to="/login">Sign In</Link>
                    </div>
                </div>

                <div className={classes.signupData}>

                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <input type="email" placeholder='Email address' />
                        <Link to="/password">Get Started <span><img style={{
                            objectFit: 'contain',
                            height: '2vw',
                            marginBottom: '-5px'
                        }} src="https://img.icons8.com/ios/50/000000/more-than.png" alt='' /></span></Link>
                    </div>
                </div>

                {/* <div className={classes.gradient}></div> */}


            </div>

        </>
    )
}
