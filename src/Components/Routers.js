import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import Listings from "./Listings"
import { useState } from 'react';




export default function Routers() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <NavBar loggedIn={loggedIn}/>
                    <LogIn navLog={setLoggedIn}/>
                </Route>
                <Route path="/Listings">
                    <NavBar/>
                    <Listings/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
