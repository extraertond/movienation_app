import { MoviePreview } from "./Movie";

export type MoviesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: MoviePreview[];
};
