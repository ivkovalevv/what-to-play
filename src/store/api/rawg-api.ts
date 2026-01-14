import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GamesResponse {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
}

export type Screenshot = {
  id: number;
  image: string;
}

export interface Screenshots {
  count: number;
  results: Screenshot[];
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
      query: ({ page }) => `games?key=${RAWG_API_KEY}&page=${page}&page_size=12`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems;
        } else {
          if (currentCache.results && newItems.results) {
            const existingIds = new Set(currentCache.results.map(game => game.id));
            const uniqueNewGames = newItems.results.filter(game => !existingIds.has(game.id));
            
            currentCache.results.push(...uniqueNewGames);
            currentCache.count = newItems.count;
          }
          return currentCache;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getOneGame: builder.query<Game, { slug: string }>({
      query: ({ slug }) => `games/${slug}?key=${RAWG_API_KEY}`,
    }),
    getScreenshotsOneGame: builder.query<Screenshots, { slug: string}>({
      query: ({ slug }) => `games/${slug}/screenshots?key=${RAWG_API_KEY}`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useSearchGamesQuery,
  useGetInfiniteGamesQuery,
  useGetOneGameQuery,
  useGetScreenshotsOneGameQuery,
} = rawgApi;
