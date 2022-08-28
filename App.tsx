import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommitsScreen from 'Screens/Commits';
import InputRepoScreen from 'Screens/InputRepo';
import LoginScreen from 'Screens/Login';

import { ScreenNameEnum } from './Shared/Enums';

// const LoginScreen = lazy(() => import('Screens/Login'));
// const InputRepoScreen = lazy(() => import('Screens/InputRepo'));
// const CommitsScreen = lazy(() => import('Screens/Commits'));

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNameEnum.Login} component={LoginScreen} />
        <Stack.Screen name={ScreenNameEnum.InputRepo} component={InputRepoScreen} />
        <Stack.Screen name={ScreenNameEnum.Commits} component={CommitsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
