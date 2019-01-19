import React from 'react';
import constants from '../constants';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="gray"
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
          placeholderTextColor="gray"
        />
        <Button
        title="Register"
        onPress={() => {
            this.props.setCurrentMode(constants.modes.EDIT_PROFILE)
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
