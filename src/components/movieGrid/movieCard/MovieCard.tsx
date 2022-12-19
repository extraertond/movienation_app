import { useNavigate } from "react-router-dom";
import { MoviePreview } from "../../../models/Movie";
import { MovieActions } from "../../movieActions/MovieActions";
import "./MovieCard.scss";

export const MovieCard = ({ id, title, poster }: MoviePreview) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={poster} />
      <h1 className="card__title" onClick={() => navigate(`/movie/${id}`)}>
        {title}
      </h1>
      <div className="card__movie-actions__container">
        <MovieActions id={id} />
      </div>
    </div>
  );
};
