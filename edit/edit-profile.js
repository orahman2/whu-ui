import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    const thisUser = this.props.userData[this.props.user]

    console.log(thisUser)

    return (
      <View style={{flex: 1,  flexDirection: 'column', marginTop: 150, alignItems: 'stretch', justifyContent: 'flex-start'}}>
        <Text style={{width: 75}}>Name:</Text>
        <TextInput
          value={thisUser.name ? thisUser.name : "Enter your name"}
          placeholderTextColor="gray"
        />
        <Text style={{width: 75}}>Age:</Text>
        <TextInput
          placeholder="Enter your age"
          value={thisUser.age ? thisUser.age.toString() : ""}
          placeholderTextColor="gray"
        />
        <Text style={{width: 75}}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          value={thisUser.email ? thisUser.email : ""}
          placeholderTextColor="gray"
        />
        <Text style={{width: 75}}>Work:</Text>
        <TextInput
          placeholder="Enter your workplace"
          placeholderTextColor="gray"
        />
        <Text style={{width: 75}}>Nationality:</Text>
        <TextInput
          placeholder="Enter your nationality"
          value={thisUser.nationality ? thisUser.nationality : ""}
          placeholderTextColor="gray"
        />
        <Text style={{width: 75}}>Interests:</Text>
        <TextInput
          multiline = {true}
          style={{width: 200, marginBottom: 20}}
          placeholder="Enter your interests"
          value={thisUser.interests ? thisUser.interests : ""}
          placeholderTextColor="gray"
        />

        <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Image style={{width: 50, height: 50}} source={require('./../assets/FBIcon.png')} />
          <Image style={{width: 50, height: 50}} source={require('./../assets/IIcon.png')} />
        </View>
        <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Image style={{width: 50, height: 50}} source={require('./../assets/TIcon.png')} />
          <Image style={{width: 50, height: 50}} source={require('./../assets/linkedin.png')} />
        </View>

        <Button
          title="Submit"
          onPress={() => {

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
