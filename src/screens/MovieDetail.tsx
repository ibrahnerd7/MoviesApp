import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import useMovie from '../hooks/useMovie';

const MovieDetail = ({route}) => {
  const {movieId} = route && route.params;
  const {data, isSuccess, isLoading} = useMovie(movieId);
  return (
    <View style={{flex: 1}}>
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <View>
          <Image
            source={{
              uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`,
            }}
            style={styles.detailImage}
            resizeMode="contain"
          />
          <Text>{data.title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    width: '100%',
    height: 76,
  },
});

export default MovieDetail;
