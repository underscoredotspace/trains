import { RouteComponentProps } from "@reach/router"

export enum Direction {
    ARR = "arr",
    DEP = "dep"
}

export type TimesProps = RouteComponentProps<{
    direction: Direction
    station: string
}>
