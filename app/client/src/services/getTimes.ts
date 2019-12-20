const baseUrl = `/.netlify/functions/get_rtt`

import { ReactNetlifyIdentityAPI } from "react-netlify-identity"
import { Direction } from "../Times/types"

interface GetTimesProps {
    station: string
    direction: Direction
    authedFetch: ReactNetlifyIdentityAPI["authedFetch"]
}

export const getTimes = ({
    station,
    direction,
    authedFetch
}: GetTimesProps): Promise<any> => {
    const url = `${baseUrl}?station=${station}&direction=${direction}`

    return authedFetch
        .get(url)
        .catch(error => error)
        .then(response => response)
}
