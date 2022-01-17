import React, { useRef, useState, useContext } from 'react'
import classes from './SignUpPassword.module.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-context'


export default function SignUpPawssword(props) {
    const { enterdEmail } = props
    const passwordInput = useRef()
    const [error, setError] = useState()

    const ctx = useContext(AuthContext)

    // sending requset to firebase API to signup
    const signUpHandler = (event) => {
        event.preventDefault();
        const enteredPassword = passwordInput.current.value;
        console.log(enteredPassword)

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAimMobkX5Gd0dW_8JZf3YIfj9icdfr8Wg',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enterdEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(res => {
            if (res.ok) {
                ctx.onLogin(true)
                setError(null)
            }
            else {
                return res.json().then(data => {
                    console.log(data)
                    setError(data.error.message)
                })
            }
        })
    }

    console.log(ctx.isLoggedin)

    return (
        <div className={classes.signupPass}>

            <div className={classes.signupPassNav}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
                <Link to="/login">Sign In</Link>
            </div>


            <div className={classes.signupbox}>

                <h1>
                    <span>
                        Welcome
                        <br />
                        Joining Netflix is easy.
                    </span>
                </h1>

                <p>Enter your password and you'll be watching in no time.</p>
                <p style={{ padding: '0px' }}>Email</p>
                <h4>{enterdEmail}</h4>
                <form onSubmit={signUpHandler} >
                    <input ref={passwordInput} type="text" placeholder='Enter your password' />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <a href="#">Forget your password?</a>
                    <button>Sign Up</button>
                </form>
            </div>

            <div className={classes.bottom}>
                <p>Questions? Call 000-800-040-1843</p>
                <div>
                    <span>FAQ</span>
                    <span>Help Center</span>
                    <span>Terms of Use</span>
                    <span>Privacy</span>
                    <span>Cookie Preferences</span>
                    <span>Corporate Information</span>
                </div>

                <select name="language" id="language">
                    <option >English</option>
                    <option >हिन्दी</option>
                </select>
            </div>

        </div>
    )

}
