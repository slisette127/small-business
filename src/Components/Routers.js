import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import Listings from "./Listings"
import { useState } from 'react';
import Directions from './Directions'

const cookie = require('cookie');


export default function Routers() {
    const [loggedIn, setLoggedIn] = useState(false)

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }
    const ProtectedRoute = ({component: Component, ...rest}) => {
        return (
          <Route
          {...rest}
          render={(props) => checkAuth()
              ? <Component {...props} />
              : <Redirect to="/LogIn" />}
          />
        )
      }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/LogIn">
                    <NavBar loggedIn={loggedIn}/>
                    <LogIn navLog={setLoggedIn}/>
                </Route>
                <Route path="/Listings">
                    <NavBar/>
                    <Listings/>
                </Route>
                <Route path="/Map">
                    <NavBar/>
                    <Directions/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
