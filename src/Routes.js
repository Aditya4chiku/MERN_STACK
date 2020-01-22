import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signupp from './user/Signupp'
import Menu from './core/Menu'
import Signin from './user/Signin'
const RoutesFile = () => {


    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path='/signup' exact component={Signupp} />
                <Route path='/signin' exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}
export default RoutesFile