type Show = {
    title: string | Titles,
    description: string,
    seasons: Season[],
    ovas: OVAs,
    complete: boolean
}

type Season = {
    Episodes: Episode[],
    description: string,
    complete: boolean
}

type OVAs = {
    Episodes: Episode[]
}

type Episode = {
    title: string | Titles,
    description: string,
    released: Date,
    watched: boolean
}

type Titles = {
    default: string,
    original?: string,
    others?: string[]
}

export type { Show, Season, OVAs, Episode, Titles };