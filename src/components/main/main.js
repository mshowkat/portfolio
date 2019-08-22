import React from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingPage"
import Contact from "../contact/contact";
import Projects from "../projects/projects";

const main = () => {
    return (
        <Switch>
            <Route exact path='/portfolio' component={LandingPage}></Route>
            <Route path='/portfolio/contact' component={Contact}></Route>
            <Route path='/portfolio/projects' component={Projects}></Route>
        </Switch>
    )
}

export default main
