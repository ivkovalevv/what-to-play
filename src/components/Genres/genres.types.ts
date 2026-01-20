export interface Genre {
    id: number,
    name: string,
    slug: string,
}

export interface GenresProps{
    gameName: string;
    genres: Genre[];
};