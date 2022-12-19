import { useTranslation } from "react-i18next";
import { MoviePreview } from "../../models/Movie";
import { MovieCard } from "./movieCard/MovieCard";
import "./MovieGrid.scss";

type MovieGridProps = {
  movies: MoviePreview[];
};
export const MovieGrid = ({ movies }: MovieGridProps) => {
  const { t } = useTranslation();

  return (
    <div className="movie-grid">
      <div className="movie-grid__title">{t("trending.title")}</div>
      <div className="movie-grid__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
