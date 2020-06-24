import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ValidationComponent from 'react-native-form-validator';
import { AntDesign } from '@expo/vector-icons';

export default class SignIn extends ValidationComponent {

  //CONTRUCTOR
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      secureTextEntry: true,
      IconName: "eye",
      data: [],
      invalidname: "",
      invalidemail: ""
    }
  }

  //VALIDATING NAME REJEX
  alphaValid(Name) {
    this.setState({ Name: Name })
    let rjx = /^[a-z A-Z]+$/
    if (!rjx.test(Name)) {
      this.setState({ invalidname: "You Have Entered Invalid Name" })
    }
    else {
      this.setState({ invalidname: "" })
      return true
    }
  }


  //VALIDATING EMAIL REJEX
  alphaValidEmail(Email) {
    this.setState({ Email: Email })
    let rjx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!rjx.test(Email)) {
      this.setState({ invalidemail: "You Have Entered Invalid Email" })
    }
    else {
      this.setState({ invalidemail: "" })
      return true
    }
  }



  //VALIDATING EMPTY FIELDS
  validate_field = () => {
    const { Name, Password, Email } =
      this.state
    if (Name == "") {
      alert("Kindly Fill Your Name!")
      return false
    }
    else if (Email == "") {
      alert("Kindly Fill Your Email!")
      return false
    }
    else if (Password == "") {
      alert("Kindly Fill Your Password!")
      return false
    }
    return true
  }

  //ON BUTTON CALLING FUNCTION
  making_api_call = () => {
    if (this.validate_field()) {
      alert('Successfully Login')
    }
  }

  // ON BUTTON PASSWORD EYE ICON
  onIconPress = () => {
    let IconName = (this.state.secureTextEntry) ? "eye" : "eye"

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      IconName: IconName
    })
  }



  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{
            height: 630,
            width: 360,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image source={{ uri: 'https://github.com/aymanfatima/Python-s-Assignment-/blob/master/LOGO%20MAIN%201.png?raw=true' }}
              style={{ width: 200, height: 150, marginBottom: 20, marginTop: -10 }} />



            <MaterialIcons name="person" size={30} color="#f47100" style={styles.icon1} />
            <TextInput placeholder={"Enter Your Name"} maxLength={15}
              style={{
                height: 50, borderColor: 'black', borderWidth: 2,
                width: 280, alignItems: "center",
                paddingLeft: 50, margin: 15, borderRadius: 20
              }}
              onChangeText={(Name) => { this.alphaValid(Name) }}
            />
            <Text style={{ color: 'red', marginTop: -15 }}>
              {this.state.invalidname}
            </Text>





            <Entypo name="email" size={24} color="#f47100" style={styles.icon2} />
            <TextInput placeholder="Enter Your Email"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 50, margin: 15, borderRadius: 20
              }} onChangeText={(Email) => { this.alphaValidEmail(Email) }}
            />
            <Text style={{ color: 'red', marginTop: -15 }}>
              {this.state.invalidemail}
            </Text>




            <MaterialCommunityIcons name="account-key" size={30} color="#f47100" style={styles.icon3} />
            <TextInput icon="lock" placeholder="Enter Your Password"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 50, margin: 10, borderRadius: 20
              }}
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(Password) => this.setState({ Password })} value={this.state.Password} />
            <TouchableOpacity onPress={this.onIconPress} style={styles.eyess}  >
              <AntDesign name={this.state.IconName} size={24} color="black" />
            </TouchableOpacity>



            <TouchableOpacity
              onPress={() => { this.making_api_call() }}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 20, alignItems: "center", borderRadius: 20
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Log In</Text>
            </TouchableOpacity>



            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, marginBottom: 10, padding: 10, alignItems: "center", borderRadius: 20
              }}
            >
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Log In With Google</Text>
            </TouchableOpacity>


            <Text
              onPress={() => this.props.navigation.navigate('Registration')}
              style={{
                fontSize: 15,
                color: 'black',
                padding: 10,
                textAlign: "center",
                textDecorationLine: "underline"
              }}>
              Not a Member? Register As</Text>




          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
  },
  icon1: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 180,
    right: 254,
  },
  icon2: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 270,
    right: 254,
  },
  icon3: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 345,
    right: 250,
  },
  eyess:
  {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 340,
    right: 30,
  }
});


