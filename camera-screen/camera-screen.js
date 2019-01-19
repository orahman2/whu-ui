import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class CameraScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Camera Screen</Text>
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
