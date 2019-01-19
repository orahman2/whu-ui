import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    const thisUser = this.props.userData[this.props.user]

    console.log(thisUser)

    return (
      <View style={{flex: 1,  flexDirection: 'column', marginTop: 200, alignItems: 'stretch'}}>
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
          style={{width: 200, marginBottom: 150}}
          placeholder="Enter your interests"
          value={thisUser.interests ? thisUser.interests : ""}
          placeholderTextColor="gray"
        />

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
