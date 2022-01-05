import React from 'react'
import classes from './Bottom.module.css'
import fblogo from '../logos/fblogo.png'
import instalogo from '../logos/instalogo.png'
import twitterlogo from '../logos/twitterlogo.png'
import youtubelogo from '../logos/youtubelogo.png'


export default function Bottom() {
    return (
        <>

            <div className={classes.bottom}>
                <div className={classes.sponsers}>
                    <a href="#"><img src={fblogo} alt="facebook" /></a>
                    <a href="#"><img src={instalogo} alt="instagram" /></a>
                    <a href="#"><img src={twitterlogo} alt="twitter" /></a>
                    <a href="#"><img src={youtubelogo} alt="youtube" /></a>
                </div>

                <ul className={classes.bottomLinks}>
                    <li>Audio and Subtitle</li>
                    <li>Audio Description</li>
                    <li>Help Centre</li>
                    <li>Gift Cards</li>
                    <li>Media Centre</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Contact Us</li>
                </ul>

                <button>Service Code</button>
                <p><span>&#169;</span> Netflix Clone App {'{jdhf99f8fh8f789hu}'}</p>
            </div>

        </>
    )
}
