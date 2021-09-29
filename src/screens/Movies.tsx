import React from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  Container,
  Footer,
  Header,
  Heading,
  MovieCard,
  MoviesView,
  RateBar,
  RateStar,
  RateText,
  SearchButton,
} from '../components';
import {getGenresName} from '../hooks/apiutils';

import useMovies from '../hooks/useMovies';
import MovieItem from '../components/MovieItem';

const Movies: React.FC = ({navigation}) => {
  const {data, isLoading, isSuccess} = useMovies();
  return (
    <Container>
      <MoviesView>
        <Header>
          <Heading>Top Movies</Heading>
          <SearchButton>
            <Ionicons name="search-outline" size={24} color="#ffffff" />
          </SearchButton>
        </Header>
        {isLoading && <ActivityIndicator />}
        {isSuccess && (
          <FlatList
            data={data?.results}
            renderItem={({item}) => (
              <MovieItem
                movieItem={item}
                handleMovieClick={() =>
                  navigation.navigate('Movie Detail', {movieId: item.id})
                }
              />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Footer />}
          />
        )}
      </MoviesView>
    </Container>
  );
};

export default Movies;
