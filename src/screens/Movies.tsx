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
                    <CardText numberOfLines={1}>
                      {getGenresName(item.genre_ids).join(' / ')}
                    </CardText>
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
        )}
      </MoviesView>
    </Container>
  );
};

export default Movies;
