import React from "react"
import ReactDOM from "react-dom"
import { IdentityContextProvider } from "react-netlify-identity"

import App from "./src/App"

ReactDOM.render(
    <IdentityContextProvider url="https://trains.messy.cloud">
        <App />
    </IdentityContextProvider>,
    document.getElementById("root")
)
