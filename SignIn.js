import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import ValidationComponent from 'react-native-form-validator';
import { AntDesign } from '@expo/vector-icons';


export default class SignIn extends ValidationComponent {

  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      secureTextEntry: true,
      IconName: "eye",
    }
  }

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


  making_api_call = () => {
    if (this.validate_field()) {
      alert('Successfully Login')
    }
  }

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
            height: 650,
            width: 360,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image source={{ uri: 'https://github.com/aymanfatima/Python-s-Assignment-/blob/master/LOGO%20MAIN%201.png?raw=true' }}
              style={{ width: 200, height: 150, marginBottom: 40, marginTop: -10 }} />


            <MaterialIcons name="person" size={30} color="#f47100" style={styles.icon1} />
            <TextInput placeholder={"Enter Your Name"}
              onChangeText={(Name) => this.setState({ Name })} value={this.state.Name}
              style={{
                height: 50, borderColor: 'black', borderWidth: 2,
                width: 280, alignItems: "center",
                paddingLeft: 50, margin: 15, borderRadius: 20
              }} />


            <Entypo name="email" size={24} color="#f47100" style={styles.icon2} />
            <TextInput placeholder="Your Email"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 50, margin: 15, borderRadius: 20
              }}
              onChangeText={(Email) => this.setState({ Email })} value={this.state.Email} />



            <MaterialCommunityIcons name="account-key" size={30} color="#f47100" style={styles.icon3} />
            <TextInput icon="lock" placeholder="Password"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 50, margin: 15, borderRadius: 20
              }}
              secureTextEntry={this.state.secureTextEntry} 

              onChangeText={(Password) => this.setState({ Password })} value={this.state.Password}/>
            <TouchableOpacity onPress={this.onIconPress} style={styles.eyess}  >
            <AntDesign name={this.state.IconName} size={24} color="black" />
            </TouchableOpacity> 




            <TouchableOpacity
              onPress={() => this.making_api_call()}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 20, alignItems: "center", borderRadius: 20
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Log In</Text>
            </TouchableOpacity>


            <Text
              onPress={() => this.props.navigation.navigate('Registration')}
              style={{
                fontSize: 15,
                color: 'black',
                padding: 10,
                textAlign: "center",
                marginBottom: 40,
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
    top: 210,
    right: 250,
  },
  icon2: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 295,
    right: 250,
  },
  icon3: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 370,
    right: 250,
  },
  eyess: 
  {
  padding: 10,
    margin: 15,
    position: "absolute",
    top: 374,
    right: 30,
  }

});


