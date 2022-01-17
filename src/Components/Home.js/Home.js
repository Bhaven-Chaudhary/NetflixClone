import React from 'react'
import Banner from './Banner';
import Bottom from './Bottom'
import NavBar from './NavBar';
import Rows from './Rows';

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Rows></Rows>
            <Bottom></Bottom>
        </>

    )
}
