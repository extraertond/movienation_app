import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../services/API/moviesAPI";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
