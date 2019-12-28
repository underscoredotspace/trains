import React, { useState, useEffect } from "react"
import { TimesProps, Direction } from "./types"
import { getTimes } from "../services"
import { useIdentityContext } from "react-netlify-identity"

const Times: React.FC<TimesProps> = ({
    direction = Direction.DEP,
    station = ""
}) => {
    const [timetable, setTimetable] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const { authedFetch } = useIdentityContext()

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(true), 750)
        getTimes({ station, authedFetch, direction })
            .then(times => {
                setTimetable(times)
            })
            .catch(error => {
                setTimetable(error)
            })
            .finally(() => clearTimeout(timeout))

        return () => clearTimeout(timeout)
    }, [direction, station])

    const loading = <span>loading</span>

    const timetableElement = (
        <>
            <h2>
                {direction} times for {station}
            </h2>
            <p>{JSON.stringify(timetable)}</p>
        </>
    )

    return !isLoading ? timetableElement : loading
}

export default Times
