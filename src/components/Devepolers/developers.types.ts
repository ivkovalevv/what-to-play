export interface Developer {
    id: number,
    name: string,
    slug: string,
}

export interface DevelopersProps{
    gameName: string;
    developers: Developer[];
};