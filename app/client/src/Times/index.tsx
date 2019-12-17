import React from "react"
import Times from "./Times"
import { TimeType, TimesProps } from "./types"

const Arrivals: React.FC<TimesProps> = ({ station }) => (
    <Times station={station} type={TimeType.ARR} />
)

const Departures: React.FC<TimesProps> = ({ station }) => (
    <Times station={station} type={TimeType.DEP} />
)

export { Arrivals, Departures }
