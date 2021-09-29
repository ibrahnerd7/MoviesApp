import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Main from './src/navigation/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.Fragment>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
