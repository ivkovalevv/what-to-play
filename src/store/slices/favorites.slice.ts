import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../../app/games/[slug]/game.types";

type Favorites = Array<Game>;

const initialState: Favorites  = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
       toggleFavorites: (state, action) => {
            const game = action.payload;
            const isExist = state.some(item => item.id === game.id);
            console.log(isExist)

            if(isExist){
                state = state.filter(item => item.id !== game.id);
                console.log(state)
            } else {
                state.push(game);
            }
        }
    },
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;