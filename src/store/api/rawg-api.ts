import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GamesResponse, ScreenshotsResponse, GameResponse } from "./rawg.types";

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
    getOneGame: builder.query<GameResponse, { slug: string }>({
      query: ({ slug }) => `games/${slug}?key=${RAWG_API_KEY}`,
    }),
    getScreenshotsOneGame: builder.query<ScreenshotsResponse, { slug: string}>({
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
