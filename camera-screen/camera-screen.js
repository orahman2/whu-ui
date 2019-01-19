import React from 'react';
import { Button, StyleSheet, TextInput, View, ScrollView, Text } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

export default class CameraScreen extends React.Component {
    state = {
        result: null,
    };

    useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
    });
    this.setState({ result });
    };

    askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
    };

    useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: false,
        });
        this.setState({ result });
    };
    
    render() {
        return (
            <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
                <Button title="launchCameraAsync" onPress={this.useCameraHandler} />
                <Button
                title="launchImageLibraryAsync"
                onPress={this.useLibraryHandler}
                />
                <Text style={styles.paragraph}>
                {JSON.stringify(this.state.result)}
                </Text>
            </ScrollView>
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
