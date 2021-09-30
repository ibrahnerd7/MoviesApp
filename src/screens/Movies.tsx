import {API_KEY} from '@env';
import {MoviesResult} from '@types';
import axios from 'axios';
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useInfiniteQuery} from 'react-query';
import {
  Container,
  Footer,
  Header,
  Heading,
  MoviesView,
  SearchButton,
} from '../components';
import MovieItem from '../components/MovieItem';
import {BASE_URL} from '../hooks/apiutils';

const Movies: React.FC = ({navigation}) => {
  const {data, isLoading, fetchNextPage, isSuccess, error, isFetchingNextPage} =
    useInfiniteQuery(
      'movies',
      async ({pageParam = 1}) => {
        const response = await axios.get(
          `${BASE_URL}/trending/movie/week?page=${pageParam}&api_key=${API_KEY}`,
        );

        const moviesReponse = await response.data;
        return moviesReponse;
      },
      {
        getNextPageParam: (lastPage, _) =>
          lastPage.page !== lastPage.total_pages
            ? lastPage.page + 1
            : undefined,
      },
    );

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
            data={data?.pages.map(pageItem => pageItem.results).flat()}
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
            onEndReached={() => fetchNextPage()}
          />
        )}
        {isFetchingNextPage && <ActivityIndicator />}
        {error && <Text>{`Failed to fetch movies : ${error?.message}`}</Text>}
      </MoviesView>
    </Container>
  );
};

export default Movies;
