import { Game, Screenshot } from "components/app/games/[slug]/game.types";

export interface GamesResponse {
  count: number;
  results: Game[];
}

export type GameResponse = Game;

export interface ScreenshotsResponse {
  count: number;
  results: Screenshot[];
}