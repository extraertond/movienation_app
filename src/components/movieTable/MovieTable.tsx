import { TableCell, TableRow, TableContainer, Paper, Table, TableHead, TableBody } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MoviePreview } from "../../models/Movie";
import { MovieRow } from "./movieRow/MovieRow";
import "./MovieTable.scss";

type MovieTableProps = {
  movies: MoviePreview[] | number[];
  isSearch: boolean;
};

export const MovieTable = ({ movies, isSearch }: MovieTableProps) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow className="table-head--mobile">
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow className="table-head--desktop">
            <TableCell></TableCell>
            <TableCell>{t("list.title")}</TableCell>
            <TableCell>{t("list.release-date")}</TableCell>
            <TableCell>{t("list.rating")}</TableCell>
            <TableCell>{t("list.add-lists")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => {
            const id = isSearch ? (movie as MoviePreview).id : (movie as number);
            return <MovieRow id={id} key={id} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
