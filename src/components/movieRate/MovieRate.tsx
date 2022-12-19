import { useTranslation } from "react-i18next";
import { Movie } from "../../models/Movie";
import "./MovieRate.scss";

type MovieRateProps = {
  movie: Movie | any;
};
export const MovieRate = ({ movie }: MovieRateProps) => {
  const { t } = useTranslation();

  return (
    <>
      {movie.vote_count !== 0 && (
        <>
          <div>
            <span className="movie-rate">{movie.rate}</span>
            <span className="movie-rate--secondary">{" / 10"}</span>
          </div>
          <div className="movie-rate--secondary">{t("list.vote-count", { count: movie.vote_count })}</div>
        </>
      )}
    </>
  );
};
