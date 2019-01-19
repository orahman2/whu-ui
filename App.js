import React from 'react';
import Login from './login/login-component';
import {StyleSheet, View } from 'react-native';
import constants from './constants'
import EditProfile from './edit/edit-profile';
import CameraScreen from './camera-screen/camera-screen';

export default class App extends React.Component {
  state = {
    mode: constants.modes.LAUNCHED
  }

  constructor(props){
    super(props)
    this.setCurrentMode = this.setCurrentMode.bind(this)
  }

  setCurrentMode = (currentMode) =>{
    this.setState({
      mode: currentMode
    })
  }

  render() {
    console.log('render')
    console.log(this.state.mode)
    if (this.state.mode == constants.modes.LAUNCHED) {
      currentScreen = <Login setCurrentMode={this.setCurrentMode} />
    } else if (this.state.mode == constants.modes.EDIT_PROFILE) {
      currentScreen = <EditProfile setCurrentMode={this.setCurrentMode} />
    } else if (this.state.mode == constants.modes.LOGGED_IN) {
      currentScreen = <CameraScreen setCurrentMode={this.setCurrentMode} />
    } else {
      currentScreen = <Login setCurrentMode={this.setCurrentMode} />
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
