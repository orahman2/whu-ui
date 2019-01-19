import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function doNothing(props) {
    console.log('hi');
  }

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
        onPress={doNothing()}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="gray"
        />
        <Button
        title="Register"
        onPress={doNothing()}
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
