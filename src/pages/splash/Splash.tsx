/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  Text
} from 'react-native';

import styles from './Splashstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash(props: any) {

  useEffect(() => {
    const focusListener = props.navigation.addListener('focus', () => {
      setTimeout(() => {
        userPreLoginChecking();
      }, 2500);
    });

    return focusListener;
  }, [props.navigation]);

  const userPreLoginChecking = async () => {
    try {
      const user_credentials = await AsyncStorage.getItem('user_credentials');

      if (user_credentials !== null) {
        props.navigation.navigate("NonAuthStack");
      }
      else {
        props.navigation.navigate("AuthStack");
      }
    } catch (e) {
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: '800' }}>Splash screen</Text>
    </SafeAreaView>
  );
}

export default Splash;
