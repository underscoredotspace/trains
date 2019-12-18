const baseUrl = "/.netlify/functions/get_rtt"

import { ReactNetlifyIdentityAPI } from "react-netlify-identity"

interface GetTimesProps {
    station: string
    isLoggedIn: ReactNetlifyIdentityAPI["isLoggedIn"]
    authedFetch: ReactNetlifyIdentityAPI["authedFetch"]
}

export const getTimes = ({
    station,
    isLoggedIn,
    authedFetch
}: GetTimesProps): Promise<any> => {
    const url = `${baseUrl}?station=${station}`
    if (!isLoggedIn) {
        return Promise.reject("Not logged in")
    }

    return authedFetch
        .get(url)
        .catch(error => {
            return error
        })
        .then(response => response)
}
