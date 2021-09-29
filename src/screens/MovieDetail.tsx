import React from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BackButton,
  Header,
  Heading,
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
  return (
    <>
      {isSuccess && (
        <ImageBackground
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`,
          }}
          style={styles.detailImage}>
          <MovieDetailOverlay>
            <Header>
              <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="#ffffff" />
              </BackButton>
            </Header>
            <MovieDetailContent>
              <Heading> {data.title}</Heading>
              <MovieDetailSubText>
                2019 • Fantasy / Science Fiction • 2h 5m
              </MovieDetailSubText>
              <MovieDetailText>
                Captain Marvel is an extraterrestrial Kree warrior who finds
                herself caught in the middle of an intergalactic battle between
                her people and the Skrulls. Living on Earth in 1995, she keeps
                having recurring memories of another life as U.S. Air Force
                pilot Carol Danvers. With help from Nick Fury, Captain Marvel
                tries to uncover the secrets of her past while harnessing her
                special superpowers to end the war with the evil Skrulls.
              </MovieDetailText>
              <RateBar>
                <RateStar>
                  <Ionicons name="star-outline" size={12} color="#ffffff" />
                </RateStar>
                <RateStar>
                  <Ionicons name="star-outline" size={12} color="#ffffff" />
                </RateStar>
                <RateStar>
                  <Ionicons name="star-outline" size={12} color="#ffffff" />
                </RateStar>
                <RateStar>
                  <Ionicons name="star-outline" size={12} color="#ffffff" />
                </RateStar>
                <RateStar>
                  <Ionicons name="star-outline" size={12} color="#ffffff" />
                </RateStar>
                <RateText>3/5</RateText>
              </RateBar>
              <SubHeading>Also trending</SubHeading>
            </MovieDetailContent>
          </MovieDetailOverlay>
          {isLoading && <ActivityIndicator />}
          {isSuccess && <>{/* <Text>{data.title}</Text> */}</>}
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
