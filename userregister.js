import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ValidationComponent from 'react-native-form-validator';
// import TextInputMask from 'react-native-text-input-mask';



export default class userregister extends ValidationComponent {

  //CONTRUCTOR
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      Email: "",
      cnic: "",
      phone: "",
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



  //VALIDATING PHONE REJEX
  alphaValidphone(phone) {
    this.setState({ phone: phone })
    let rjx = /^[0-0][3-3]\d{2} \d{7}$/
    if (!rjx.test(phone)) {
      this.setState({ invalidphone: "You Have Entered Invalid Cell Number" })
    }
    else {
      this.setState({ invalidphone: "" })
      return true
    }
  }


  //VALIDATING CNIC REJEX
  alphaValidcnic(cnic) {
    this.setState({ cnic: cnic })
    let rjx = /^[4-4][2-2][1-1][0-0][1-1] \d{7} \d{1}$/
    if (!rjx.test(cnic)) {
      this.setState({ invalidcnic: "You Have Entered Invalid CNIC" })
    }
    else {
      this.setState({ invalidcnic: "" })
      return true
    }
  }



  //VALIDATING EMPTY FIELDS
  validate_field = () => {
    const { Name, Password, Email, cnic, phone } =
      this.state
    if (Name == "") {
      alert("Kindly Fill Your Name!")
      return false
    }
    else if (Email == "") {
      alert("Kindly Fill Your Email!")
      return false
    }
    else if (phone == "") {
      alert("Kindly Fill Your Phone Number!")
      return false
    }
    else if (cnic == "") {
      alert("Kindly Fill Your CNIC!")
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
      alert('Successfully Registered')
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
            height: 650,
            width: 360,
            backgroundColor: "white",
            alignItems: 'center', justifyContent: "center",
          }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsgVtyhw43lL2i5a6qKuhFJ2VXzz7LIu6Z3qZ6THKo711BEyoq&usqp=CAU'
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text style={{
              alignItems: 'center', justifyContent: "center", fontSize: 20,
              color: "#0D47A1",
              padding: 6,
              fontWeight: "bold"
            }}>Account as User Register </Text>



            <Ionicons name="md-person" size={24} color='#f47100' style={styles.ImageStyles} />
            <TextInput placeholder="Full Name" maxLength={15}
              style={{
                height: 50, borderColor: 'black', borderWidth: 2,
                width: 280, alignItems: "center",
                paddingLeft: 55, margin: 10, borderRadius: 20
              }}
              onChangeText={(Name) => { this.alphaValid(Name) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidname}
            </Text>


            <MaterialCommunityIcons name="email" size={24} color="#f47100" style={styles.ImageStyles1} />
            <TextInput placeholder="Email Address" style={{
              height: 50, borderColor: 'black', borderWidth: 2,
              width: 280, alignItems: "center",
              paddingLeft: 55, margin: 10, borderRadius: 20
            }}
              onChangeText={(Email) => { this.alphaValidEmail(Email) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidemail}
            </Text>



            <Feather name="phone" size={24} color="#f47100" style={styles.ImageStyle} />
            <TextInput placeholder="03XX XXXXXXX"
              keyboardType={'phone-pad'}
              style={{
                height: 50, borderColor: 'black', borderWidth: 2,
                width: 280, alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
              }} onChangeText={(phone) => { this.alphaValidphone(phone) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidphone}
            </Text>




            <AntDesign name="idcard" size={24} color="#f47100" style={styles.ImageStyless} />
            <TextInput placeholder="CNIC   (42101 XXXXXXX X)"
              keyboardType={'phone-pad'}
              style={{
                height: 50, borderColor: 'black',
                borderWidth: 2, width: 280,
                alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
              }}
              onChangeText={(cnic) => { this.alphaValidcnic(cnic) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidcnic}
            </Text>




            <FontAwesome name="key" size={24} color="#f47100" style={styles.ImageStylesss} />
            <TextInput placeholder="Password"
              style={{
                height: 50, borderColor: 'black', borderWidth: 2,
                width: 280, alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
              }}
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(Password) => this.setState({ Password })} value={this.state.Password} />
            <TouchableOpacity onPress={this.onIconPress} style={styles.eyess}  >
              <AntDesign name={this.state.IconName} size={24} color="black" />
            </TouchableOpacity>







            <TouchableOpacity
              onPress={() => { this.making_api_call() }}
              style={{
                backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 20
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Register User Account</Text>
            </TouchableOpacity>
          </View></View></KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
  },
  ImageStyles: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 170,
    right: 255,
  },
  ImageStyles1: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 245,
    right: 255,
  },
  ImageStyle: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 323,
    right: 257,
  },
  ImageStyless: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 398,
    right: 257,
  },
  ImageStylesss: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 474,
    right: 257,
  },
  eyess:
  {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 474,
    right: 30,
  }

});
