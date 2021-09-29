import {MoviesResult} from '@types';
import React from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {QueryCache, useQueryClient} from 'react-query';
import {
  BackButton,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  Footer,
  Header,
  Heading,
  MovieCard,
  MovieDetailContent,
  MovieDetailOverlay,
  MovieDetailSubText,
  MovieDetailText,
  RateBar,
  RateStar,
  RateText,
  SubHeading,
} from '../components';
import {getGenresName} from '../hooks/apiutils';
import useMovie from '../hooks/useMovie';
import MovieItem from '../components/MovieItem';
import Ratings from '../components/Ratings';

const MovieDetail = ({navigation, route}) => {
  const {movieId} = route && route.params;
  const {data, isSuccess, isLoading} = useMovie(movieId);

  const queryClient = useQueryClient();
  const query = queryClient.getQueryCache().find('movies');
  let cachedMoviesResults: MoviesResult = query?.state.data;
  let cachedMovies = cachedMoviesResults.results.filter(
    movie => movie.id !== movieId,
  );

  const genres = data?.genres.map(genre => genre.name).join(' / ');


  return (
    <>
      {isLoading && <ActivityIndicator />}

      {isSuccess && (
        <ImageBackground
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${data?.backdrop_path}`,
          }}
          style={styles.detailImage}>
          <MovieDetailOverlay>
            <Header>
              <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="#ffffff" />
              </BackButton>
            </Header>
            <MovieDetailContent>
              <Heading> {data?.title}</Heading>
              <MovieDetailSubText>
                {`${new Date(data?.release_date).getFullYear()} • ${genres}`}
              </MovieDetailSubText>
              <MovieDetailText>{data?.overview}</MovieDetailText>
              <Ratings vote_average={data?.vote_average} />
              <SubHeading>Also trending</SubHeading>
              <FlatList
                data={cachedMovies}
                renderItem={({item}) => (
                  <MovieItem
                    movieItem={item}
                    handleMovieClick={() =>
                      navigation.navigate('Movie Detail', {movieId: item.id})
                    }
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </MovieDetailContent>
            <Footer />
          </MovieDetailOverlay>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    width: '100%',
    height: '50%',
    flex: 1,
    backgroundColor: '#252634',
  },
});

export default MovieDetail;
