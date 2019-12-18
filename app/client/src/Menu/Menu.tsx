import React from "react"
import { Link } from "@reach/router"

const sections = [
    { label: "Arrivals", section: "arr" },
    { label: "Departures", section: "dep" }
]

const stations = [
    { station: "Glasgow Central", code: "glc" },
    { station: "Burnside", code: "bui" }
]

interface StationProps {
    section: string
    label: string
    station: string
    code: string
}

const Station: React.FC<StationProps> = ({ section, label, station, code }) => (
    <li>
        <Link
            to={`/times/${section}/${code}/`}
            key={code}
            title={`${station} ${label}`}
        >
            {station}
        </Link>
    </li>
)

interface SectionProps {
    section: string
    label: string
}

const Section: React.FC<SectionProps> = ({ section, label }) => (
    <li>
        {label}
        <ul>
            {stations.map(({ station, code }) =>
                Station({ section, label, station, code })
            )}
        </ul>
    </li>
)

export default () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {sections.map(Section)}
        </ul>
    </nav>
)
