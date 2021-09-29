import {useQuery} from 'react-query';
import axios from 'axios';
import buildUrl from './apiutils';

const fetchMovies = async () => {
  const {data} = await axios.get(buildUrl('/trending/movie/week'));
  console.log(data)
  return data;
};

const useMovies = () => useQuery('movies', fetchMovies);
export default useMovies;
