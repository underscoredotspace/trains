import React from "react"
import { useIdentityContext } from "react-netlify-identity"

export default () => {
    const auth = useIdentityContext()

    const LogOutButton = (
        <button onClick={() => auth.logoutUser()}>Log out</button>
    )

    const LogInButton = (
        <button onClick={() => auth.loginProvider("github")}>Log in</button>
    )

    return auth.isLoggedIn ? LogOutButton : LogInButton
}
