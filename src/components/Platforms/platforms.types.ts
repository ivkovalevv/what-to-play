export type Platform = {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}

export type PlatformsProps = {
    gameName: string
    platforms: Platform[];
}