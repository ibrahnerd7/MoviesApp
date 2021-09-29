import React from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import useMovies from '../hooks/useMovies';

const Movies = () => {
  const {data, isLoading, isSuccess} = useMovies();
  return (
    <View>
      <Text>Top Movies</Text>
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <FlatList
          data={data.results}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text>{item.original_title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Movies;
