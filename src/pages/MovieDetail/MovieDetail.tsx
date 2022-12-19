import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { EmbedVideo } from "../../components/embedVideo/EmbedVideo";
import { MovieActions } from "../../components/movieActions/MovieActions";
import { MovieImages } from "../../components/movieImages/MovieImages";
import { MovieRate } from "../../components/movieRate/MovieRate";
import { useLazyGetMovieDetailsQuery } from "../../services/API/moviesAPI";
import "./MovieDetail.scss";

export const MovieDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [trigger, { data: movie, isSuccess }] = useLazyGetMovieDetailsQuery();

  // Close search bar if it is open
  useEffect(() => (document.activeElement as HTMLElement)?.blur(), []);

  useEffect(() => {
    if (id) trigger({ id: parseInt(id) }, true);
  }, [id]);

  useEffect(() => {
    if (movie?.title) document.title = `${movie.title} | MovieNation`;
  }, [movie?.title]);

  return (
    <div className="movie-detail">
      {isSuccess && (
        <>
          <div className="movie-detail__title">
            <span>{movie.title}</span>
            {movie.year && <span className="movie-detail__title--date">{` (${movie.year})`}</span>}
          </div>
          <div className="movie-detail__container">
            {movie.poster && (
              <div className="movie-detail__image-list__container">
                <img src={movie.poster} />
                <MovieImages images={movie.images} />
              </div>
            )}
            <div className="movie-detail__rate">
              <MovieRate movie={movie} />
            </div>
            <div className="movie-detail__extra-info__container">
              <div className="info__container">
                <MovieActions id={movie.id} />
                <p className="info-title">{t("detail.overview")}</p>
                <div>{movie.overview}</div>
                <p className="info-title">{t("detail.genres")}</p>
                <div>{movie.genres}</div>
                <p className="info-title">{t("detail.countries")}</p>
                <div className="country-flag">
                  {movie.countries.map((country: string) => (
                    <img key={`${country}-${movie.id}`} src={country} />
                  ))}
                </div>
              </div>
            </div>
            <div className="movie-detail__extra-info__container">
              <div className="info__container">
                <p className="info-title">{t("detail.cast")}</p>
                <p>{movie.vipCast}</p>
              </div>
              <div className="info__container">
                <p className="info-title">{t("detail.produced")}</p>
                <div>{movie.producers}</div>
              </div>
            </div>
          </div>
          <div className="movie-detail__video-list__container">
            {movie.videos.map((key: string) => (
              <EmbedVideo key={key} videoId={key} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
