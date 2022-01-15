import React from 'react'
import classes from './SignIn.module.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div>

            <div className={classes.signinNav}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
            </div>


            <div className={classes.signinbox}>
                <form className={classes.signinForm}>

                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' />
                    <input type="text" placeholder='Password' />
                    <button>Sign In</button>

                    <div className={classes.formextra}>
                        <input id='checkbox' className={classes.checkboxc} type="checkbox" />
                        <label htmlFor="checkbox">Remember me</label>
                        <h5 style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: '100' }}>Need help?</h5>
                    </div>

                </form>

                <div className={classes.siginbottom}>
                    <label><img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="FB" /> Login to Facebok</label>
                    <h3>New to Netflix? <Link to='/'>Sign up now</Link></h3>
                    <span>This page is protected by Google reCAPTACHA to ensure you're not a bot.</span>
                </div>


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
