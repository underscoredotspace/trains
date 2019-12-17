import { RouteComponentProps } from "@reach/router"

export enum TimeType {
    ARR = "Arrival",
    DEP = "Departure"
}

export type TimesProps = RouteComponentProps<{
    type: TimeType
    station: string
}>
