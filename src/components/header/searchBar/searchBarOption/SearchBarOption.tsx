import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import { useNavigate } from "react-router-dom";
import { MoviePreview } from "../../../../models/Movie";
import "./SearchBarOption.scss";

export const SearchBarOption = ({ id, title, year, poster }: MoviePreview) => {
  const navigate = useNavigate();

  return (
    <li className="search-option" onClick={() => navigate(`/movie/${id}`)}>
      <div className="search-option__img-container">
        {poster ? <img src={poster} alt={title} /> : <ImageNotSupportedIcon fontSize="large" />}
      </div>
      <div className="search-option__info-container">
        <span>{title}</span>
        {year && <span className="search-option__info-container__date"> ({year})</span>}
      </div>
    </li>
  );
};
