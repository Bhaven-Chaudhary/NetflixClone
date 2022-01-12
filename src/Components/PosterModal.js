import React from 'react'
import classes from './PosterModal.module.css'

export default function PosterModal(props) {
    return (
        <>
            <div className={classes.modalcontainer}>

                <div className={classes.poster}>
                    <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.menu}>

                </div>

            </div>

        </>
    )
}
