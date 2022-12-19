import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { MovieTable } from "../../components/movieTable/MovieTable";
import { ListType } from "../../models/ListType";
import { MoviePreview } from "../../models/Movie";
import { useLazyGetMoviesSearchQuery } from "../../services/API/moviesAPI";
import { getList } from "../../services/storage/storageService";
import "./MovieList.scss";

type MovieListProps = {
  type: ListType;
};

export const MovieList = ({ type }: MovieListProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [triggerSearch, { data }] = useLazyGetMoviesSearchQuery();

  // Close search bar if it is open
  useEffect(() => (document.activeElement as HTMLElement)?.blur());

  const [movieList, setMovieList] = useState<MoviePreview[]>([]);
  const [idList, setIdList] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [count, setCount] = useState<number>(20);
  const [page, setPage] = useState<number>(1);

  const searchMovies = (search: string, page: number) => {
    triggerSearch({ query: search, page }, true).then((searchResult) => {
      if (searchResult.isSuccess) {
        setMovieList(searchResult.data.results);
      }
    });
  };

  useEffect(() => {
    setCount(type === "search" ? data?.total_results || 0 : idList.length);
  }, [type, data, idList]);

  useEffect(() => {
    const newSearchText = new URL(document.location.href).searchParams.get("query");
    type === "search" && newSearchText ? searchMovies(newSearchText, page) : setIdList(getList(type));
  }, [type, location]);

  useEffect(() => {
    if (type === "search") {
      const newSearchText = new URL(document.location.href).searchParams.get("query");
      setSearchText(newSearchText || "");
      document.title = `"${newSearchText}" | MovieNation`;
    } else {
      document.title = t("list.page-title", { type });
    }
  }, [type, location]);

  const getListTitle = (type: ListType, search?: string) => {
    switch (type) {
      case "search":
        return `${t("list.search-title", { query: search })}`;
      case "watchlist":
        return t("list.watchlist-title");
      case "favorites":
        return t("list.favorites-title");
    }
  };

  return (
    <>
      <div className="movie-list__title">{getListTitle(type, searchText)}</div>
      <MovieTable movies={type === "search" ? movieList : idList} isSearch={type === "search"} />
      <TablePagination
        rowsPerPageOptions={[20]}
        component="div"
        count={count}
        rowsPerPage={20}
        page={page - 1}
        onPageChange={(_, newPage) => {
          setPage(newPage + 1);
          searchMovies(searchText, newPage + 1);
        }}
      />
    </>
  );
};
