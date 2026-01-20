export type Platform = {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}

export type PlatformsProps = {
    platforms: Platform[];
}