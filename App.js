import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './src/components/SignupForm';
import SigninForm from './src/components/SigninForm';
import firebase from 'firebase';
import config from './config';

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
