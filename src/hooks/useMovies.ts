import {useQuery} from 'react-query';
import axios from 'axios';
import buildUrl from './apiutils';
import {MoviesResult} from '@types';

const fetchMovies = async () => {
  const {data} = await axios.get(buildUrl('/trending/movie/week'));
  return data;
};

const useMovies = () => useQuery<MoviesResult, Error>('movies', fetchMovies);
export default useMovies;
