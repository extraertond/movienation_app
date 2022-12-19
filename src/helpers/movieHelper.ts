import { COUNTRY_BASE_URL, POSTER_BASE_URL } from "../constants/endpoints";
import { Cast, Genre, Producer, ProducerCountry } from "../models/Movie";

type Poster = {
  file_path: string;
};
export const normalizeMovieList = (results: object[]) => {
  return results.map((result: any) => ({
    id: result.id,
    title: result.title,
    poster: result.poster_path && `${POSTER_BASE_URL}/${result.poster_path}`,
    date: result.release_date,
    year: result.release_date && new Date(result.release_date).getFullYear(),
  }));
};

export const normalizeMovieDetail = (movie: any) => {
  const videos = movie.videos.results.filter((movie: any) => movie.type === "Trailer");

  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path && `${POSTER_BASE_URL}${movie.poster_path}`,
    date: movie.release_date,
    year: movie.release_date && new Date(movie.release_date).getFullYear(),
    rate: Math.round(movie.vote_average * 10) / 10,
    vote_count: movie.vote_count,
    videos: videos.map((video: any) => video.key),
    overview: movie.overview,
    countries: getFlagImages(movie.production_countries),
    vipCast: getVipCast(movie.credits.cast),
    images: getNormalizedImages(movie.images.posters),
    producers: getListNames(movie.production_companies),
    genres: getListNames(movie.genres),
  };
};

export const getListNames = (genres: Array<Genre | Producer>) => genres.map((genre) => genre.name).join(", ");
export const getNormalizedImages = (posters: Poster[]) =>
  posters.map((poster: Poster) => `${POSTER_BASE_URL}${poster.file_path}`);
export const getVipCast = (cast: any) => {
  const sortedCast = cast.sort((a: Cast, b: Cast) => a.popularity > b.popularity);
  return sortedCast
    .slice(0, 3)
    .map((actor: Cast) => actor.name)
    .join(", ");
};
const getFlagImages = (countries: ProducerCountry[]) =>
  countries.map((country: any) => `${COUNTRY_BASE_URL}/w20/${country.iso_3166_1.toLowerCase()}.png`);
