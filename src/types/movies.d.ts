declare module '@types' {
  export interface Movie {
    original_language: string;
    original_title: string;
    poster_path: string;
    video: boolean;
    vote_average: number;
    overview: string;
    release_date: string;
    title: string;
    adult: boolean;
    backdrop_path: string;
    vote_count: number;
    genre_ids: number[];
    id: number;
    popularity: number;
    media_type: string;
  }

  export interface MoviesResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

  export type MainStackParamList = {
    Movies: undefined;
    'Movie Detail': {movieId: string};
  }
}
