/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Toast from 'react-native-toast-message';

//Splash screen
import Splash from './src/pages/splash/Splash';

//Auth pages
import Login from './src/pages/auth/Login';

//Non-auth pages
import Home from './src/pages/nonAuth/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);


const NonAuthStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
          />
          <Stack.Screen
            name="NonAuthStack"
            component={NonAuthStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
