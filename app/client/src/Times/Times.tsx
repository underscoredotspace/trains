import React from "react"
import { TimesProps } from "./types"

const Times: React.FC<TimesProps> = ({ type, station }) => (
    <h2>
        {type} times for {station}
    </h2>
)

export default Times
