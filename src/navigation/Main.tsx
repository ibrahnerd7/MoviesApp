import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {MainStackParamList} from '@types';
import React from 'react';
import {MovieDetail, Movies} from '../screens';

const MainStack = createStackNavigator<MainStackParamList>();

const options = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Movies"
      component={Movies}
      options={{...options, animationTypeForReplace: 'pop'}}
    />
    <MainStack.Screen
      name="Movie Detail"
      component={MovieDetail}
      options={{...options, animationTypeForReplace: 'pop'}}
    />
  </MainStack.Navigator>
);

export default Main;
