import {Movie} from '@types';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CardContent, CardImage, CardText, CardTitle, MovieCard} from '.';
import {getGenresName} from '../hooks/apiutils';
import Ratings from './Ratings';

const MovieItem = (props: {movieItem: Movie; handleMovieClick: Function}) => {
  const movieItem: Movie = props.movieItem;

  const genres = getGenresName(movieItem.genre_ids);

  return (
    <TouchableOpacity onPress={() => props.handleMovieClick()}>
      <MovieCard>
        <CardImage
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${movieItem.poster_path}`,
          }}
        />
        <CardContent>
          <CardTitle numberOfLines={3}>{movieItem.title}</CardTitle>
          <CardText numberOfLines={1}>{genres}</CardText>
          <CardText numberOfLines={1}>
            {new Date(movieItem.release_date).getFullYear()}
          </CardText>
          <Ratings vote_average={movieItem?.vote_average} />
        </CardContent>
      </MovieCard>
    </TouchableOpacity>
  );
};

export default MovieItem;
