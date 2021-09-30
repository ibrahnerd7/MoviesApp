import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BackButton,
  Container,
  Footer,
  Header,
  Heading,
  LoadingIndicator,
  MovieDetailContent,
  MovieDetailOverlay,
  MovieDetailSubText,
  MovieDetailText,
  SubHeading,
} from '../components';
import useMovie from '../hooks/useMovie';
import MovieItem from '../components/MovieItem';
import Ratings from '../components/Ratings';
import useMovies from '../hooks/useMovies';

const MovieDetail = ({navigation, route}) => {
  const {movieId} = route && route.params;
  const {data, isSuccess, isLoading, error} = useMovie(movieId);

  const {data: moviesData} = useMovies();
  let movies = moviesData?.results?.filter(movie => movie.id !== movieId);

  const genres = data?.genres.map(genre => genre.name).join(' / ');

  return (
    <Container>
      {isLoading && <LoadingIndicator />}

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
                data={movies}
                renderItem={({item}) => (
                  <MovieItem
                    movieItem={item}
                    handleMovieClick={() =>
                      navigation.navigate('Movie Detail', {movieId: item.id})
                    }
                  />
                )}
                showsVerticalScrollIndicator={false}
                onScrollBeginDrag={() => console.log('Hide header')}
              />
            </MovieDetailContent>
            <Footer />
          </MovieDetailOverlay>
        </ImageBackground>
      )}

      {error && <Text>{`Failed to fetch movies : ${error?.message}`}</Text>}
    </Container>
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
