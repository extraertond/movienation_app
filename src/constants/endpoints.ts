export const BASE_API_URL = process.env.BASE_API_URL as string;
export const API_KEY = process.env.API_KEY as string;
export const API_VERSION = "/3";

export const MOVIE_ENDPOINTS: Record<string, string> = {
  search: "/search/movie",
  trending: "/trending/movie/week",
  detail: "/movie",
};

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w200";
export const COUNTRY_BASE_URL = "https://flagcdn.com";

export const PATH_OF_ROUTES: Record<string, string> = {
  INDEX: "/",
  DETAIL: "/movie/:id",
  SEARCH: "/search",
  WATCHLIST: "/watchlist",
  FAVORITES: "/favorites",
};
