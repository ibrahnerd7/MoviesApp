# MoviesApp [![Build status](https://build.appcenter.ms/v0.1/apps/2efcd867-d7e1-43d4-a434-e644d1e1f511/branches/dev/badge)](https://appcenter.ms) [![Build status](https://build.appcenter.ms/v0.1/apps/b0d70215-9276-4bf4-8c07-2d5418aab3e1/branches/dev/badge)](https://appcenter.ms)
MoviesApp is a two page app that allows any users to view a list of movies From the <a href="https://developers.themoviedb.org/3">Movie DB API</a>.
- <a href="https://i.diawi.com/MpBBfj">Android apk</a>
- <a href="https://streamable.com/twyjvs"> Screencast</a>





## Features
- The initial screen shows the list of trending movies.
- The details screen shows the details about the current movie and a list containing the other movies trending.
- The movie list is be an infinite scrollable list . 
- Clicking on movie cards opens the details screen
- States (Loading, Error and success) are handled accordingly. 


## Running locally
- Ensure you have both iOS and Android development environments setup as suggested in the <a href="https://reactnative.dev/docs/environment-setup">official docs</a>
- Clone the project with `git clone git@github.com:ibrahnerd7/MoviesApp.git`
- Navigate into the root directory with `cd MoviesApp`
- Head over to <a href="https://developers.themoviedb.org/3">THE Movie DB API</a>  and obtain an `apiKey`
- Rename `sample.env` to `.env` and replace the value of `API_KEY` with the apiKey you obtained above like `API_KEY=YOUR_API_KEY`
- Install dependecies with  `yarn install`
- Install iOS pods with `npx pod-install`
- Run iOS version with `npx react-native run-ios` and android version with `npx react-native run-android`

## Libraries used
- <a href="https://reactnavigation.org">@react-navigation/native,@react-navigation/stack </a> for navigation.
- <a href="https://axios-http.com">axios</a> as our HTTP client
- <a href="https://github.com/goatandsheep/react-native-dotenv">react-native-dotenv</a> to load environment variables using import statements.
- <a href="https://github.com/software-mansion/react-native-gesture-handler#readme">react-native-gesture-handler</a> for gesture handling.
- <a href="https://github.com/th3rdwave/react-native-safe-area-context#readme">react-native-safe-area-context</a> to handle safe area.
- <a href="https://github.com/software-mansion/react-native-screens#readme">react-native-screens</a> for native navigation.
- <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a> as our icons source.
- <a href="https://github.com/tannerlinsley/react-query#readme">react-query</a> hooks for managing, caching and syncing asynchronous and remote data.
- <a href="https://styled-components.com/">styled-components</a> to style your app without stress

## Note
- In case you run into problems with the icons, please refer to react-native-vector-icons <a href="https://github.com/oblador/react-native-vector-icons#installation">official guide</a>
