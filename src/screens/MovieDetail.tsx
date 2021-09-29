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
import useMovie from '../hooks/useMovie';

const MovieDetail = ({navigation, route}) => {
  const {movieId} = route && route.params;
  const {data, isSuccess, isLoading} = useMovie(movieId);

  const queryClient = useQueryClient();
  const query = queryClient.getQueryCache().find('movies');
  let cachedMoviesResults: MoviesResult = query?.state.data;
  let cachedMovies = cachedMoviesResults.results.filter(
    movie => movie.id !== movieId,
  );

  const genres= data?.genres
  .map(genre => genre.name)
  .join(' / ');

  let rating = Math.floor((data?.vote_average * 5) / 10);

  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let name = 'star';
    if (i > rating) {
      name = 'star-outline';
    }
    stars.push(
      <RateStar>
        <Ionicons name={`${name}`} size={14} color="#FFB825" key={i} />
      </RateStar>,
    );
  }

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
              <RateBar>
                {stars}
                <RateText>{`${rating}/5`}</RateText>
              </RateBar>
              <SubHeading>Also trending</SubHeading>
              <FlatList
                data={cachedMovies}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Movie Detail', {
                        movieId: item.id,
                      })
                    }>
                    <MovieCard>
                      <CardImage
                        source={{
                          uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`,
                        }}
                      />
                      <CardContent>
                        <CardTitle numberOfLines={3}>{item.title}</CardTitle>
                        <CardText numberOfLines={1}>Fantasy/Action</CardText>
                        <CardText numberOfLines={1}>
                          {new Date(item.release_date).getFullYear()}
                        </CardText>
                        <RateBar>
                          <RateStar>
                            <Ionicons
                              name="star-outline"
                              size={12}
                              color="#ffffff"
                            />
                          </RateStar>
                          <RateStar>
                            <Ionicons
                              name="star-outline"
                              size={12}
                              color="#ffffff"
                            />
                          </RateStar>
                          <RateStar>
                            <Ionicons
                              name="star-outline"
                              size={12}
                              color="#ffffff"
                            />
                          </RateStar>
                          <RateStar>
                            <Ionicons
                              name="star-outline"
                              size={12}
                              color="#ffffff"
                            />
                          </RateStar>
                          <RateStar>
                            <Ionicons
                              name="star-outline"
                              size={12}
                              color="#ffffff"
                            />
                          </RateStar>
                          <RateText>3/5</RateText>
                        </RateBar>
                      </CardContent>
                    </MovieCard>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<Footer />}
              />
            </MovieDetailContent>
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
