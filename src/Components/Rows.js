import React from 'react'
import Row from "../Components/Row"
import classes from './Rows.module.css'
import useRequestUrl from './useRequestUrl'

export default function Rows() {

    const requestUrl = useRequestUrl()

    return (

        <div className={classes.rows}>

            <Row title='Trending Now' requestUrl={requestUrl.trendingUrl} trendingRow></Row>
            <Row title='Netflix Originals' requestUrl={requestUrl.netflixOriginalsUrl}></Row>
            <Row title='Top Rated' requestUrl={requestUrl.topRatedUrl}></Row>
            <Row title='Action Movies' requestUrl={requestUrl.actionMoviesUrl}></Row>
            <Row title='Crime Movies' requestUrl={requestUrl.crimeMoviesUrl}></Row>
            <Row title='Family Movies' requestUrl={requestUrl.familyMoviesUrl}></Row>
            <Row title='Comedy Movies' requestUrl={requestUrl.comedyMoviesUrl}></Row>
            <Row title='Horror Movies' requestUrl={requestUrl.horrorMoviesUrl}></Row>
            <Row title='Romance Movies' requestUrl={requestUrl.romanceMoviesUrl}></Row>
            <Row title='Documentaries' requestUrl={requestUrl.documentariesUrl}></Row>

        </div>

    )
}
