import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUpPage from './SignUpPage'
import { Route, Switch } from 'react-router-dom';
import SignUpPassword from './SignUpPassword';
export default function Signing() {

    const [enterdEmail, setEnterdEmail] = useState(null)

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <SignUpPage setEnterdEmail={setEnterdEmail}></SignUpPage>
                </Route>
                <Route path='/password'>
                    <SignUpPassword enterdEmail={enterdEmail} />
                </Route>
                <Route path='/login' exact>
                    <SignIn></SignIn>
                </Route>
            </Switch>
        </>
    )
}
