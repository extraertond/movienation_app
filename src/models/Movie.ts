export type MoviePreview = {
  id: number;
  title: string;
  year: number | string;
  date?: string;
  poster?: string;
};

export type Movie = MoviePreview & {
  rate: number;
  vote_count: number;
  vote_average: number;
  overview: string;
  videos: any;
  vipCast: string;
  countries: string[];
  production_countries: any;
  release_date?: string;
  credits?: any;
  poster_path?: string;
};
