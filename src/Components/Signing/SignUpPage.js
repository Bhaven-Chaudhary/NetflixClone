import React from 'react'
import classes from './SignUpPage.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useRef, useState } from 'react'


export default function LoginPage(props) {
    const emailInput = useRef()
    const history = useHistory()
    const [emailValid, setEmailValid] = useState(true)

    const getStartedHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInput.current.value;

        if (enteredEmail.length > 5) {
            props.setEnterdEmail(enteredEmail)
            setEmailValid(true)
            history.push('/password')
        }
        setEmailValid(false)
    }



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
                    <form onSubmit={getStartedHandler} >
                        <input ref={emailInput} type="email" placeholder='Email address' />
                        <button>Get Started <span><img style={{
                            objectFit: 'contain',
                            height: '20px',
                            verticalAlign: 'middle'
                        }} src="https://img.icons8.com/ios/50/000000/more-than.png" alt='' /></span>
                        </button>
                    </form>
                    {!emailValid && <p style={{ color: 'yellow' }}>Please enter a valid email address.</p>}
                </div>

                {/* <div className={classes.gradient}></div> */}


            </div>

        </>
    )
}
