import { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { ListType } from "../../models/ListType";
import { addToList, isMovieInList, removeFromList } from "../../services/storage/storageService";
import "./MovieActions.scss";

type MovieActionsProps = {
  id: number;
};

export const MovieActions = ({ id }: MovieActionsProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWatchlist, setIsWatchlist] = useState<boolean>(false);

  useEffect(() => checkStorage(id), [id]);

  const checkStorage = (id: number) => {
    setIsFavorite(isMovieInList("favorites", id));
    setIsWatchlist(isMovieInList("watchlist", id));
  };

  const toggleMovie = (type: ListType, id: number, isAdd: boolean = true) => {
    isAdd ? addToList(type, id) : removeFromList(type, id);
    checkStorage(id);
  };

  return (
    <div className="movie-action">
      {isFavorite ? (
        <StarIcon
          onClick={() => toggleMovie("favorites", id, false)}
          className="movie-action__icon  movie-action__icon--selected"
        ></StarIcon>
      ) : (
        <StarOutlineIcon onClick={() => toggleMovie("favorites", id)} className="movie-action__icon"></StarOutlineIcon>
      )}
      {isWatchlist ? (
        <BookmarkAddedIcon
          onClick={() => toggleMovie("watchlist", id, false)}
          className="movie-action__icon movie-action__icon--selected"
        ></BookmarkAddedIcon>
      ) : (
        <BookmarkAddIcon onClick={() => toggleMovie("watchlist", id)} className="movie-action__icon"></BookmarkAddIcon>
      )}
    </div>
  );
};
