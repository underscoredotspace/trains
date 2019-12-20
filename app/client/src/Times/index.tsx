import React from "react"
import Times from "./Times"
import { Direction, TimesProps } from "./types"

const Arrivals: React.FC<TimesProps> = ({ station }) => (
    <Times station={station} direction={Direction.ARR} />
)

const Departures: React.FC<TimesProps> = ({ station }) => (
    <Times station={station} direction={Direction.DEP} />
)

export { Arrivals, Departures }
