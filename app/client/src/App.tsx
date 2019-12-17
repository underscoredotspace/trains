import React from "react"
import { Router, RouteComponentProps } from "@reach/router"
import { Arrivals, Departures } from "./Times"

const Home: React.FC<RouteComponentProps> = () => <h2>Welcome</h2>

const Times: React.FC<RouteComponentProps> = () => (
    <>
        <Router>
            <Departures path="/dep/:station" />
            <Arrivals path="/arr/:station" />
        </Router>
    </>
)

export default () => (
    <>
        <h1>Trains</h1>

        <Router>
            <Home path="/" />
            <Times path="/times/*" />
        </Router>
    </>
)
