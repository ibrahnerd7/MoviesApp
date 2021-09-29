import {useQuery} from 'react-query';
import axios from 'axios';
import buildUrl from './apiutils';

const fetchMovie = async (movieId: string) => {
  const {data} = await axios.get(buildUrl(`/movie/${movieId}`));
  return data;
};

const useMovie = (movieId: string) =>
  useQuery(['movie', movieId], () => fetchMovie(movieId));

export default useMovie;
