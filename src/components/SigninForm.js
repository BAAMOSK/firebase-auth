import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-e79b2.cloudfunctions.net';

class SigninForm extends Component {

  state = { phone: '', error: '', code: '' };

  handleSignin = async () => {
    const { phone, code } = this.state;
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <View style={{ borderWidth: 1, backgroundColor: '#ddd' }}>
        <Text h3 style={{ textAlign: 'center' }}>
          Signin
        </Text>

        <FormLabel>
          Phone Number
        </FormLabel>
        <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })}/>

        <FormLabel>
          Auth Code
        </FormLabel>
        <FormInput value={this.state.code} onChangeText={code => this.setState({ code })}/>

        <View style={{ marginBottom: 10 }} >
          <Button title="Signin" onPress={this.handleSignin} />
        </View>
      </View>
    );
  }
}

export default SigninForm;