import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GamesResponse {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export const rawgApi = createApi({
  reducerPath: "rawgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api/",
  }),
  endpoints: (builder) => ({
    getGames: builder.query<
      GamesResponse,
      { page?: number; pageSize?: number }
    >({
      query: ({ page = 1, pageSize = 10 }) =>
        `games?key=${RAWG_API_KEY}&page=${page}&page_size=${pageSize}`,
    }),
    searchGames: builder.query<
      GamesResponse,
      { search: string; page?: number }
    >({
      query: ({ search, page = 1 }) =>
        `games?key=${RAWG_API_KEY}&search=${search}&page=${page}`,
    }),
    getInfiniteGames: builder.query<GamesResponse, { page: number }>({
      query: ({ page }) => `games?key=${RAWG_API_KEY}&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getOneGame: builder.query<Game, { id: number }>({
      query: ({ id }) => `games/${id}?key=${RAWG_API_KEY}`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useSearchGamesQuery,
  useGetInfiniteGamesQuery,
  useGetOneGameQuery,
} = rawgApi;
