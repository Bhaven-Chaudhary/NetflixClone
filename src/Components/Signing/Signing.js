import React from 'react'
import SignIn from './SignIn'
import SignUpPage from './SignUpPage'
import { Route, Switch } from 'react-router-dom';
import SignUpPassword from './SignUpPassword';
export default function Signing() {
    return (
        <>


            <Switch>
                <Route path="/" exact>
                    <SignUpPage></SignUpPage>
                </Route>
                <Route path='/password'>
                    <SignUpPassword />
                </Route>
                <Route path='/login' exact>
                    <SignIn></SignIn>
                </Route>

            </Switch>

        </>
    )
}
