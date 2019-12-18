import React, { useState, useEffect } from "react"
import { TimesProps } from "./types"
import { getTimes } from "../services/get_departures"
import { useIdentityContext } from "react-netlify-identity"

const Times: React.FC<TimesProps> = ({ type, station = "" }) => {
    const [timetable, setTimetable] = useState()
    const { authedFetch, isLoggedIn } = useIdentityContext()

    useEffect(() => {
        getTimes({ station, authedFetch, isLoggedIn })
            .then(times => {
                setTimetable(times)
            })
            .catch(error => {
                setTimetable(error)
            })
    }, [])

    const loading = <span>loading</span>

    const timetableElement = (
        <>
            <h2>
                {type} times for {station}
            </h2>
            <p>{JSON.stringify(timetable)}</p>
        </>
    )

    return timetable ? timetableElement : loading
}

export default Times
