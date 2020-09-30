import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ValidationComponent from 'react-native-form-validator';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';


export default class SignIn extends ValidationComponent {
  //CONTRUCTOR
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      email: "",
      password: "",
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
  alphaValidEmail(email) {
    this.setState({ email: email })
    let rjx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!rjx.test(email)) {
      this.setState({ invalidemail: "You Have Entered Invalid Email" })
    }
    else {
      this.setState({ invalidemail: "" })
      return true
    }
  }



  //VALIDATING EMPTY FIELDS
  validate_field = () => {
    const { Name, password, email } =
      this.state
    // if (Name == "") {
    //   alert("Kindly Fill Your Name!")
    //   return false
    // }
     if (email == "") {
      alert("Kindly Fill Your Email!")
      return false
    }
    else if (password == "") {
      alert("Kindly Fill Your Password!")
      return false
    }
    return true
  }


  //ON BUTTON CALLING FUNCTION
  making_api_call = (email, password) => {
    if(this.validate_field())
    {      
     firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => {
        console.log('got data ', data);
        console.log(this.email);
        })
        .catch(error => {
        console.log('got an error ', error);
        });
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



  render() 
  {
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
            <TextInput placeholderTextColor = "black" placeholder={"Enter Your Name"} maxLength={15} 
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
            <TextInput placeholderTextColor = "black" placeholder="Enter Your Email"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 50, margin: 15, borderRadius: 20
              }} onChangeText={(email) => { this.alphaValidEmail(email) }}
            />
            <Text style={{ color: 'red', marginTop: -15 }}>
              {this.state.invalidemail}
            </Text>




            <MaterialCommunityIcons name="account-key" size={30} color="#f47100" style={styles.icon3} />

            <TextInput icon="lock" placeholderTextColor = "black" placeholder="Enter Your Password"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft:55, margin: 10, borderRadius: 20
              }}
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(password) => this.setState({ password })} value={this.state.password} />

            <TouchableOpacity onPress={this.onIconPress} style={styles.eyess}  >
              <AntDesign name={this.state.IconName} size={24} color="black" />
            </TouchableOpacity>



            <TouchableOpacity
              onPress={() => { this.making_api_call(this.state.email, this.state.password) }}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 20, alignItems: "center", borderRadius: 20
              }}>
              <Text style={{ fontSize: 17, color: 'black', padding: 6 }}>
                Log In</Text>
            </TouchableOpacity>



            {/* <Googlesign /> */}

            <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Registration')}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 5, alignItems: "center", borderRadius: 20
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Not a Member? Register as</Text>
            </TouchableOpacity>




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
    top: 200,
    right: 254,
  },
  icon2: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 290,
    right: 254,
  },
  icon3: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 365,
    right: 250,
  },
  eyess:
  {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 368,
    right: 30,
  }
});


