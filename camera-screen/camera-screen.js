import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{
              flex: 1,
              height: "95%",
              width: 415,
              backgroundColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center" }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 350,
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={async () => {
                  let photo = await this.camera.takePictureAsync();
                  console.log(photo)
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, width: 350, height: "95%", color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
