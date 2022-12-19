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
  genres: Genre[];
  producers: Producer[];
  release_date?: string;
  credits?: any;
  poster_path?: string;
};

export type Genre = {
  name: string;
};

export type Producer = {
  name: string;
};

export type Cast = {
  popularity: number;
  name: string;
};

export type ProducerCountry = {
  iso_3166_1: string;
};
