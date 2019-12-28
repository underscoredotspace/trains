import React from "react"
import { Router, RouteComponentProps } from "@reach/router"
import { useIdentityContext } from "react-netlify-identity"

import { Arrivals, Departures } from "./Times"
import Menu from "./Menu"
import Auth from "./Auth"

const NotFound: React.FC<RouteComponentProps> = () => <p>Select a station</p>

const App: React.FC<RouteComponentProps> = () => {
    const { isLoggedIn } = useIdentityContext()

    return (
        <>
            <header>
                {isLoggedIn && <Menu />}
                <Auth />
            </header>
            {isLoggedIn && (
                <main>
                    <h1>Trains</h1>

                    <Router>
                        <Departures path="/times/dep/:station" />
                        <Arrivals path="/times/arr/:station" />
                        <NotFound default />
                    </Router>
                </main>
            )}
        </>
    )
}

export default App
