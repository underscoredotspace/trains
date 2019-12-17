import React from "react"
import ReactDOM from "react-dom"
import { IdentityContextProvider } from "react-netlify-identity"

import Auth from "./src/Auth"

import App from "./src/App"
import Menu from "./src/Menu"

ReactDOM.render(
    <IdentityContextProvider url="https://trains.messy.cloud">
        <header>
            <Menu />
            <Auth />
        </header>
        <main>
            <App />
        </main>
    </IdentityContextProvider>,
    document.getElementById("root")
)
