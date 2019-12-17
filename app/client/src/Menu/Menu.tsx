import React from "react"
import { Link } from "@reach/router"

export default () => {
    const parts = [
        { label: "To", part: "arr" },
        { label: "From", part: "dep" }
    ]

    const stations = [
        { station: "Glasgow Central", code: "glc" },
        { station: "Burnside", code: "bui" }
    ]
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {parts.map(({ label, part }) => (
                    <li>
                        {label}
                        <ul>
                            {stations.map(({ station, code }) => (
                                <li>
                                    <Link
                                        to={`/times/${part}/${code}/`}
                                        key={code}
                                        title={`${label} ${station}`}
                                    >
                                        {station}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
