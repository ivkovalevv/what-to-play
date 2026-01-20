export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
};

export type RatingsProps = {
    gameName: string;
    rating: number;
    ratings: Rating[];
}
