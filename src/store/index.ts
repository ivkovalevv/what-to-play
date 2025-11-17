import { configureStore } from "@reduxjs/toolkit";
import { rawgApi } from "./api/rawg-api";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        [rawgApi.reducerPath]: rawgApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rawgApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;