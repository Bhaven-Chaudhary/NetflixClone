import React from 'react'
import classes from './SignUpPassword.module.css'
import { Link } from 'react-router-dom'
export default function SignUpPawssword() {

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
                <h4>abc@gmail.com</h4>
                <input type="text" placeholder='Enter your password' />
                <a href="#">Forget your password?</a>
                <button>Sign Up</button>
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


            <div className={classes.opacity} style={{
                backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9737377e-a430-4d13-ad6c-874c54837c49/cedd9792-de8e-4a6a-9825-c47f372570b6/IN-en-20220111-popsignuptwoweeks-perspective_alpha_website_medium.jpg)'
            }} >
            </div>

        </div>
    )

}
