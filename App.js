import React from 'react';
import Login from './login/login-component';
import {StyleSheet, View } from 'react-native';
import constants from './constants'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.setCurrentMode = this.setCurrentMode.bind(this)
    this.setCurrentMode(constants.modes.LAUNCHED)
  }

  setCurrentMode = (currentMode) =>{
    this.setState({
      mode: currentMode
    })
  }

  render() {
    if (this.currentMode == constants.modes.LAUNCHED) {
      currentScreen = <Login/>
    } else {
      currentScreen = <Login/>
    }
    return (
      <View style={styles.container}>
        {currentScreen}
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
