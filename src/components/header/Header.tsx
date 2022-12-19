import { AppBar, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppLogo from "./AppLogo/AppLogo";
import { LangSelector } from "./langSelector/LangSelector";
import { ListOptions } from "./listOptions/ListOptions";
import { SearchBar } from "./searchBar/SearchBar";
import { PATH_OF_ROUTES } from "../../constants/endpoints";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <div className="app-logo__container" onClick={() => navigate(PATH_OF_ROUTES.INDEX)}>
          <AppLogo className="app-logo" viewBox="0 0 201.88 103.24" />
        </div>
        <Box className="empty-box" />
        <SearchBar />
        <Box className="empty-box" />
        <ListOptions />
        <LangSelector />
      </Toolbar>
    </AppBar>
  );
};
