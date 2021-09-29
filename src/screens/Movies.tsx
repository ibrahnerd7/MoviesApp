import React from 'react';
import {Text} from 'react-native';
import {API_KEY} from '@env';

const Movies = () => {
  console.log(API_KEY);
  return <Text>Top Movies</Text>;
};

export default Movies;
