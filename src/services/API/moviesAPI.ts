import { createApi } from "@reduxjs/toolkit/query/react";
import i18next from "i18next";
import axiosBaseQuery from "./axiosBaseQuery";
import { API_KEY, API_VERSION, BASE_API_URL, MOVIE_ENDPOINTS } from "../../constants/endpoints";
import { normalizeMovieDetail, normalizeMovieList } from "../../helpers/movieHelper";

type GetMoviesSearchQueryArgs = {
  query: string;
  page: number;
};

type GetDetailQueryArgs = {
  id: number;
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery<any>({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (build) => ({
    getMoviesSearch: build.query<any, GetMoviesSearchQueryArgs>({
      query: ({ query, page }) => ({
        url: `${API_VERSION}${MOVIE_ENDPOINTS.search}`,
        params: { query, include_adult: true, api_key: API_KEY, language: i18next.language, page },
      }),
      transformResponse: (response) => ({
        ...response,
        results: normalizeMovieList(response.results),
      }),
    }),
    getTrendingMovies: build.query<any, void>({
      query: () => ({
        url: `${API_VERSION}${MOVIE_ENDPOINTS.trending}`,
        params: { include_adult: true, api_key: API_KEY, language: i18next.language },
      }),
      transformResponse: (response) => ({
        ...response,
        results: normalizeMovieList(response.results),
      }),
    }),
    getMovieDetails: build.query<any, GetDetailQueryArgs>({
      query: ({ id }) => ({
        url: `${API_VERSION}${MOVIE_ENDPOINTS.detail}/${id}`,
        params: { api_key: API_KEY, language: i18next.language, append_to_response: "credits,videos,images" },
      }),
      transformResponse: (response) => normalizeMovieDetail(response),
    }),
  }),
});

export const {
  useLazyGetMoviesSearchQuery,
  useGetTrendingMoviesQuery,
  useLazyGetMovieDetailsQuery,
  useGetMovieDetailsQuery,
} = moviesApi;
