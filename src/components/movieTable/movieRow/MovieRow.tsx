import { TableCell, TableRow } from "@mui/material";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import { useNavigate } from "react-router-dom";
import { MovieActions } from "../../movieActions/MovieActions";
import { useGetMovieDetailsQuery } from "../../../services/API/moviesAPI";
import { t } from "i18next";
import "./MovieRow.scss";
import { MovieRate } from "../../movieRate/MovieRate";

type MovieRowProps = {
  id: number;
};

export const MovieRow = ({ id }: MovieRowProps) => {
  const navigate = useNavigate();
  const { data: movie, isLoading, isSuccess } = useGetMovieDetailsQuery({ id });

  return (
    <>
      {isSuccess && (
        <TableRow key={movie.id}>
          <TableCell className="img__container" onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="poster__container">
              {movie.poster ? <img src={movie.poster} alt={movie.title} /> : <ImageNotSupportedIcon fontSize="large" />}
            </div>
          </TableCell>
          <TableCell>
            <div className="title" onClick={() => navigate(`/movie/${movie.id}`)}>
              {movie.title}
            </div>
            <div className="country-flag">
              {movie.countries.map((country: string) => (
                <img key={`${country}-${movie.id}`} src={country} />
              ))}
            </div>
            <div className="movie-count">{movie.vipCast}</div>
            <div className="show-block-mobile">
              <MovieRate movie={movie} />
              <MovieActions id={movie.id} />
            </div>
          </TableCell>
          <TableCell className="table-cell--mobile">{movie.date}</TableCell>
          <TableCell className="table-cell--mobile">
            <MovieRate movie={movie} />
          </TableCell>
          <TableCell className="block-mobile">
            <MovieActions id={movie.id} />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
