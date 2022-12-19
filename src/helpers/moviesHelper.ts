import { COUNTRY_BASE_URL, POSTER_BASE_URL } from "../constants/endpoints";

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
  const countries = movie.production_countries.map(
    (country: any) => `${COUNTRY_BASE_URL}/w20/${country.iso_3166_1.toLowerCase()}.png`
  );
  const vipCast = movie.credits.cast
    .sort((a: any, b: any) => a.popularity > b.popularity)
    .slice(0, 3)
    .map((actor: any) => actor.name)
    .join(", ");

  const videos = movie.videos.results.filter((movie: any) => movie.type === "Trailer");
  const images = movie.images.posters.map((image: any) => `${POSTER_BASE_URL}${image.file_path}`);
  const producers = movie.production_companies.map((company: any) => company.name).join(", ");
  const genres = movie.genres.map((genre: any) => genre.name).join(", ");

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
    countries,
    vipCast,
    images,
    producers,
    genres,
  };
};
