import { MovieGrid } from "../../components/movieGrid/MovieGrid";
import { useGetTrendingMoviesQuery } from "../../services/API/moviesAPI";

export const Trending = () => {
  const { isSuccess, data } = useGetTrendingMoviesQuery();
  return <>{isSuccess && <MovieGrid movies={data.results} />}</>;
};
