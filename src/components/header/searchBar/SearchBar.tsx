import { Autocomplete, ListItemButton, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { useLazyGetMoviesSearchQuery } from "../../../services/API/moviesAPI";
import { MoviePreview } from "../../../models/Movie";
import { SearchBarOption } from "./searchBarOption/SearchBarOption";
import { PATH_OF_ROUTES } from "../../../constants/endpoints";
import { SearchBarInput } from "./searchBarInput/SearchBarInput";
import "./SearchBar.scss";

export const SearchBar = () => {
  const { t } = useTranslation();
  const [trigger, { data }] = useLazyGetMoviesSearchQuery();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>("");
  const [debouncing, setDebouncing] = useState<boolean>(false);

  const isEmptySearch = (search: string) => !search || /^\s*$/.test(search);
  const movies: MoviePreview[] = !isEmptySearch(searchText) ? data?.results || [] : [];

  useEffect(() => {
    const newSearchText = new URL(document.location.href).searchParams.get("query");
    setSearchText(newSearchText || "");
  }, []);

  const debouncedSearch = useCallback(
    debounce(async (debouncedSearch) => {
      if (!isEmptySearch(debouncedSearch)) {
        await trigger({ query: debouncedSearch, page: 1 }, true);
      }
      setDebouncing(false);
    }, 600),
    []
  );

  const onSubmitSearch = () => {
    if (searchText) {
      trigger({ query: searchText, page: 1 }, true);
    }
  };

  const onChangeSearchText = (eventType: string | undefined, newSearchValue: string) => {
    if (eventType === "change") {
      setSearchText(newSearchValue);
      debouncedSearch(newSearchValue);
      setDebouncing(true);
    }
  };

  return (
    <form
      className="search-bar__form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`${PATH_OF_ROUTES.SEARCH}?query=${searchText}`);
      }}
    >
      <Autocomplete
        className="autocomplete__container"
        options={movies}
        loading={debouncing}
        getOptionLabel={(movie) => movie.title}
        inputValue={searchText}
        noOptionsText={t("search.no-options")}
        onInputChange={(event, newInputValue) => onChangeSearchText(event?.type, newInputValue)}
        onChange={(_, selectedMovie) => selectedMovie?.title && onSubmitSearch()}
        renderOption={(_, movie) => <SearchBarOption key={movie.id} {...movie} />}
        renderInput={(params) => <SearchBarInput placeholder={t("header.search-placeholder") as string} {...params} />}
        PaperComponent={({ children, ...props }) => (
          <Paper {...props} className="paper">
            {children}
            {movies.length > 0 && (
              <ListItemButton
                className="see-all__option"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => navigate(`${PATH_OF_ROUTES.SEARCH}?query=${searchText}`)}
              >
                {t("search.see-all", { query: searchText })}
              </ListItemButton>
            )}
          </Paper>
        )}
      />
    </form>
  );
};
