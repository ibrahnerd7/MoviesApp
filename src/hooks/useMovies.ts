import {useQuery} from 'react-query';
import axios from 'axios';

const fetchMovies=async () =>{
    
}

const useMovies=()=> useQuery('movies', fetchMovies);
export default useMovies;