import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './HomeStyle';
import Toolbar from '../../components/toolbar/Toolbar';
import Toast from 'react-native-toast-message';

type ToastProps = {
  type: string,
  header: string,
  bodyMsg: string
};

function Home() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userCreds, setUserCreds] = useState();

  useEffect(() => {
    try {
      AsyncStorage.getItem('user_credentials').then(res => {
        setUserCreds(JSON.parse(res));
      })
    } catch (e) {
    }
  }, []);

  useEffect(() => {

    const unsubscribe = firestore().collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        console.log(messages);
        
        setMessages(messages);
      });


    return () => unsubscribe();
  }, []);

  const handleSend = () => {

    if (message) {
      firestore().collection('messages').add({
        text: message,
        createdAt: firestore.FieldValue.serverTimestamp(),
        userName: userCreds.name,
        userId: userCreds.id
      }).then(() => {
        setMessage('');
      });
    }
    else {
      show_toast({ type: 'error', header: '', bodyMsg: 'Please type message then send' });
    }
  }

  const renderMessage = (item: any) => {
    return (
      <View style={[styles._chat_box, { backgroundColor: item.item.userId == userCreds.id ? '#58D68D' : '#D5DBDB', }]}>
        <Text style={styles._chat_box_name}>{item.item.userName}</Text>
        <Text style={styles._chat_box_msg}>{item.item.text}</Text>
      </View>
    );
  }

  const show_toast = (obj: ToastProps) => {
    Toast.show({
      type: obj.type,
      text1: obj.header,
      text2: obj.bodyMsg
    });
  }

  return (
    <View style={styles.container}>
      <Toolbar title='Chat' />
      <FlatList
        data={messages}
        renderItem={renderMessage}
        inverted={true}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text_input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <View style={styles._btn}>
          <Button
            title="Send"
            onPress={handleSend}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
