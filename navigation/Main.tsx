import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MovieDetail, Movies} from '../screens';

const MainStack = createStackNavigator();

const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Movies" component={Movies} />
    <MainStack.Screen name="MovieDetail" component={MovieDetail} />
  </MainStack.Navigator>
);

export default Main;
