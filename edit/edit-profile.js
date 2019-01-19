import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit Profile</Text>
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
