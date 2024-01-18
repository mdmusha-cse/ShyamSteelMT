import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert
} from 'react-native';

import styles from './LoginStyle';
import Toast from 'react-native-toast-message';
import Loader from '../../components/loader/Loader';

import AsyncStorage from '@react-native-async-storage/async-storage';

type ToastProps = {
  type: string,
  header: string,
  bodyMsg: string
};

type userProps = {
  email: string,
  password: string,
  name: string,
  id: Number
};


const Login = (props: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState(true);
  const [loading, setLoading] = useState(false);


  const form_validation = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (email == '') {
      show_toast({ type: 'error', header: '', bodyMsg: 'Enter email address' });
    }
    else if (reg.test(email) === false) {
      show_toast({ type: 'error', header: '', bodyMsg: 'Invalid email address' });
    }
    else if (password == '') {
      show_toast({ type: 'error', header: '', bodyMsg: 'Enter your password' });
    }
    else {
      setLoading(true);
      login();
    }
  }

  const login = async () => {

    setTimeout(() => {
      if (email == 'demo@yopmail.com' && password == 'demo@123') {
        setLoading(false);
        show_toast({ type: 'success', header: 'Login successful', bodyMsg: 'Login successful' });
        storeData({ email: email, password: password, name: 'Demo', id: 100 });
      }
      else if (email == 'demo2@yopmail.com' && password == 'demo2@123') {
        setLoading(false);
        show_toast({ type: 'success', header: 'Login successful', bodyMsg: 'Login successful' });
        storeData({ email: email, password: password, name: 'Demo2', id: 200 });
      }
      else {
        setLoading(false);
        show_toast({ type: 'error', header: 'Invalid credentials', bodyMsg: 'Invalid login credentials' });
      }

    }, 2000);
  }

  const show_toast = (obj: ToastProps) => {
    Toast.show({
      type: obj.type,
      text1: obj.header,
      text2: obj.bodyMsg
    });
  }

  const storeData = async (obj: userProps) => {
    try {
      let object = {
        email: obj.email,
        password: obj.password,
        name: obj.name,
        id: obj.id
      };

      await AsyncStorage.setItem('user_credentials', JSON.stringify(object));

      props.navigation.navigate("NonAuthStack");

    } catch (e) {
      // saving error
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mian_view}>
          <View style={styles.title_view}>
            <Text style={styles._txt}>Sign in</Text>
          </View>

          <View style={styles._input_view}>
            <Image style={styles._input_view_img} source={require('../../assets/imgs/_email.png')} />
            <TextInput
              style={styles._input_view_text_input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Enter email"
            />
          </View>

          <View style={styles._input_view}>
            <Image style={styles._input_view_img} source={require('../../assets/imgs/password.png')} />
            <TextInput
              style={styles._input_view_text_input}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder="Enter password"
              secureTextEntry={passwordType ? true : false}
              maxLength={20}
            />
            <TouchableOpacity style={styles._input_view_hide_show_icon}
              activeOpacity={0.8}
              onPress={() => {
                setPasswordType(!passwordType);
              }}

            >
              <Image style={styles._input_view_hide_show_icon_img} source={passwordType ? require('../../assets/imgs/_show_eye.png') : require('../../assets/imgs/_hide_eye.png')} />
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              form_validation();
            }}
            style={styles._button}>
            <Text style={styles._button_txt}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      {loading ? <Loader></Loader> : null}
    </SafeAreaView>
  );
};

export default Login;