import React, { useMemo } from "react"
import { useIdentityContext } from "react-netlify-identity"

export default () => {
    const { isLoggedIn, logoutUser, loginProvider } = useIdentityContext()

    return useMemo(
        () =>
            isLoggedIn ? (
                <button onClick={() => logoutUser()}>Log out</button>
            ) : (
                <button onClick={() => loginProvider("github")}>Log in</button>
            ),
        [isLoggedIn]
    )
}
