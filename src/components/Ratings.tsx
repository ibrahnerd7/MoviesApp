import React from 'react';
import {RateBar, RateStar, RateText} from '.';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Ratings = (props: {vote_average: number}) => {
  let rating = Math.floor((props.vote_average * 5) / 10);

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
    <RateBar>
      {stars.map((item, index) => {
        return <View key={index}>{item}</View>;
      })}
      <RateText>{`${rating}/5`}</RateText>
    </RateBar>
  );
};

export default Ratings;
