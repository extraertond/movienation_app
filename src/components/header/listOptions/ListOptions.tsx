import { Box, IconButton, Typography } from "@mui/material";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PATH_OF_ROUTES } from "../../../constants/endpoints";
import "./ListOptions.scss";

export const ListOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="list-options__container">
      <IconButton color="inherit" sx={{ padding: 0 }} onClick={() => navigate(PATH_OF_ROUTES.WATCHLIST)}>
        <Typography className="list-title" noWrap>
          {t("header.watchlist")}
        </Typography>
        <BookmarkIcon className="list-icon" />
      </IconButton>
      <IconButton color="inherit" sx={{ padding: 0 }} onClick={() => navigate(PATH_OF_ROUTES.FAVORITES)}>
        <Typography className="list-title" noWrap>
          {t("header.favorites")}
        </Typography>
        <FolderSpecialIcon className="list-icon" />
      </IconButton>
    </div>
  );
};
