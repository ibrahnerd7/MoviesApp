import {API_KEY} from '@env';

const BASE_URL = 'https://api.themoviedb.org/3';

const buildUrl = (urlChunk: string) => {
  return `${BASE_URL}/${urlChunk}?api_key=${API_KEY}`;
};

export default buildUrl;
