import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e79b2.cloudfunctions.net';

class SignupForm extends Component {

  state = { phone: '', error: '' };

  handleSignup = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) {
      console.log(err);
      // this.setState({ error: err });
    }
  }

  render() {
    return(
      <View style={{ marginBottom: 35 }}>
      <Text h3 style={{ textAlign: 'center' }}>Signup</Text>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSignup} title="Signup" />
        <Text>
          {this.state.error}
        </Text>
      </View>
    );
  }
}

export default SignupForm;