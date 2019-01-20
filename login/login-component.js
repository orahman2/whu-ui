import React from 'react';
import constants from '../constants';
import {detectImage} from '../clients/azure-client';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone number"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
        title="Login"
        onPress={() => {
            this.props.setCurrentMode(constants.modes.LOGGED_IN)
        }}
        />
        <TextInput
          placeholder="Name"
        />
        <Button
        title="Register"
        onPress={() => {
          detectImage('973bf55a-c1f4-436e-85e5-6579fe495407')
            // this.props.setCurrentMode(constants.modes.EDIT_PROFILE)
        }}
        />
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
