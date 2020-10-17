import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ValidationComponent from 'react-native-form-validator';
import DropDownPicker from 'react-native-dropdown-picker';
import * as firebase from 'firebase';

export default class EventManager extends ValidationComponent {
  //CONTRUCTOR
  constructor(props) {
    super(props)
    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      cnic: "",
      phone: "",
      password: "",
      secureTextEntry: true,
      IconName: 'eye',
      invalidname: "",
      invalidemail: "",
      data: [],
      item1: "",
      item2: "",
      item3: "",
      newdata: [],
      mydata: [],
      manager: []
    }
  }




  //VALIDATING NAME REJEX
  alphaValid(FirstName) {
    this.setState({ FirstName: FirstName });
    let rjx = /^[a-z A-Z]+$/;
    if (!rjx.test(FirstName)) {
      this.setState({ invalidfirstname: 'You Have Entered Invalid Name' });
    } else {
      this.setState({ invalidfirstname: '' });
      return true;
    }
  }




  //VALIDATING NAME REJEX
  alphaValidsecondname(LastName) {
    this.setState({ LastName: LastName });
    let rjx = /^[a-z A-Z]+$/;
    if (!rjx.test(LastName)) {
      this.setState({ invalidlastname: 'You Have Entered Invalid Name' });
    } else {
      this.setState({ invalidlastname: '' });
      return true;
    }
  }



  //VALIDATING EMAIL REJEX
  alphaValidEmail(email) {
    this.setState({ email: email });
    let rjx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!rjx.test(email)) {
      this.setState({ invalidemail: 'You Have Entered Invalid Email' });
    } else {
      this.setState({ invalidemail: '' });
      return true;
    }
  }




  //VALIDATING PHONE REJEX
  alphaValidphone(phone) {
    this.setState({ phone: phone });
    let rjx = /^[0-0][3-3]\d{2} \d{7}$/;
    if (!rjx.test(phone)) {
      this.setState({ invalidphone: 'You Have Entered Invalid Cell Number' });
    } else {
      this.setState({ invalidphone: '' });
      return true;
    }
  }




  //VALIDATING CNIC REJEX
  alphaValidcnic(cnic) {
    this.setState({ cnic: cnic });
    let rjx = /^[4-4][2-2][1-1][0-0][1-1] \d{7} \d{1}$/;
    if (!rjx.test(cnic)) {
      this.setState({ invalidcnic: 'You Have Entered Invalid CNIC' });
    } else {
      this.setState({ invalidcnic: '' });
      return true;
    }
  }



  //VALIDATING EMPTY FIELDS
  validate_field = () => {
    // const { FirstName, LastName, password, email, cnic, phone, item1, item2, item3 } = this.state;
    // if (FirstName == '') {
    //   alert('Kindly Fill Your First Name!');
    //   return false;
    // } else if (LastName == '') {
    //   alert('Kindly Fill Your Last Name!');
    //   return false;
    // } else if (item1 == '') {
    //   alert('Kindly Select your Experience!');
    //   return false;
    // } else if (item2 == '') {
    //   alert('Kindly Select your City!');
    //   return false;
    // }
    // else if (item3 == '') {
    //   alert('Kindly Select your Management domain!');
    //   return false;
    // }
    // else if (email == '') {
    //   alert('Kindly Fill Your Email!');
    //   return false;
    // }
    // else if (phone == '') {
    //   alert('Kindly Fill Your Phone Number!');
    //   return false;
    // }
    // else if (cnic == '') {
    //   alert('Kindly Fill Your CNIC!');
    //   return false;
    // } else if (password == '') {
    //   alert('Kindly Fill Your Password!');
    //   return false;
    // }
    return true;
  };







  componentDidMount(){
    let mydata = firebase.database().ref("manager");
    mydata.on("value", snapshot => {
    let newdata = snapshot.val();
    let manager = Object.values(newdata);
    this.setState({manager});
        })
    }





    //ON BUTTON CALLING FUNCTION
    making_api_call = (email, password) => {
    if(this.validate_field())
    {      
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(newdata => {
        console.log('got data ', newdata);
        console.log(this.email); 
        const manager= firebase.database().ref("manager");
        manager.push({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        item1: this.state.item1,
        item2: this.state.item2,
        item3: this.state.item3,
        email: firebase.auth().currentUser.email,
        phone: this.state.phone,
        cnic: this.state.cnic,
        userId: firebase.auth().currentUser.uid,               
        time: Date.now()})
        alert("You have Successfully Registered")
        {this.props.navigation.navigate('Eventmanagertext')}
    })
        .catch(error => {
        alert(error);
        });
       }
    }    






  // ON BUTTON PASSWORD EYE ICON
  onIconPress = () => {
    let IconName = this.state.secureTextEntry ? 'eye' : 'eye';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      IconName: IconName,
    });
  };





  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              height: 880,
              width: 400,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/user-roles/64/users-18-128.png',
              }}
              style={{ width: 100, height: 100, marginTop: 30 }}
            />
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                color: '#0D47A1',
                padding: 6,
                fontWeight: 'bold',
              }}
            >
              Account as Wedding Event Manager
            </Text>

            <Ionicons name="md-person" size={30} color='#f47100' style={styles.FirstName} />
            <TextInput placeholderTextColor = "black"
              placeholder="First Name"
              maxLength={10}
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }} onChangeText={FirstName => {
                this.alphaValid(FirstName);
              }} />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidfirstname}
            </Text>

            <Ionicons name="md-person" size={30} color='#f47100' style={styles.LastName} />
            <TextInput placeholderTextColor = "black"
              placeholder="Last Name" 
              maxLength={10}
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }}
              onChangeText={LastName => {
                this.alphaValidsecondname(LastName);
              }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidlastname}
            </Text>


            <DropDownPicker
              items={[
                { label: 'newbie', value: 'newbie' },
                {
                  label: '1 year Experience (Intermediate)',
                  value: '1 year Experience (Intermediate)',
                },
                { label: '2 years Experience', value: '2 years Experience' },
                {
                  label: 'Expert in Managemnent',
                  value: 'Expert in Managemnent',
                },
              ]}
              dropDownStyle={{ marginTop: 5 }}
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                borderColor: 'black',
              }}
              itemStyle={{
                alignItems: 'flex-start',
                fontSize: 25,
                color: 'white',
              }}
              activeLabelStyle={{ color: 'red' }}
              placeholder="Your Experience"
              containerStyle={{ height: 50, width: 280, marginTop: 10 }}
              placeholderStyle={{ fontWeight: 'bold' }}
              isRequired={true}
            />




            <DropDownPicker
              items={[
                { label: 'karachi', value: 'karachi' },
                { label: 'Islamabad', value: 'Islamabad' },
                { label: 'Lahore', value: 'Lahore' },
                { label: 'Bhawalpur', value: 'Bhawalpur' },
                { label: 'Quetta', value: 'Quetta' },
                { label: 'Faisalabad', value: 'Faisalabad' },
                { label: 'Multan', value: 'Multan' },
                { label: 'Rawalpindi', value: 'Rawalpindi' },
                { label: 'Hyderabad', value: 'Hyderabad' },
              ]}
              dropDownStyle={{ marginTop: 5 }}
              style={{
                backgroundColor: 'white',
                borderColor: 'black',
                borderRadius: 40,
              }}
              itemStyle={{
                alignItems: 'flex-start',
                fontSize: 25,
                color: 'white',
              }}
              activeLabelStyle={{ color: 'red' }}
              placeholder="Your City"
              containerStyle={{ height: 50, width: 280, marginTop: 20 }}
              placeholderStyle={{ fontWeight: 'bold' }}
              isRequired={true}
              onChangeItem={item2 => this.setState({ item2 })}
              value={this.state.item2}
            />



<DropDownPicker
              items={[
                { label: 'Wedding Event Manager', value: 'Wedding Event Manager' },
              ]}
              dropDownStyle={{ marginTop: 5 }}
              style={{
                backgroundColor: 'white',
                borderColor: 'black',
                borderRadius: 40,
              }}
              itemStyle={{
                alignItems: 'flex-start',
                fontSize: 25,
                color: 'white',
              }}
              activeLabelStyle={{ color: 'red' }}
              placeholder="Management Domain"
              containerStyle={{ height: 50, width: 280, marginTop: 20 }}
              placeholderStyle={{ fontWeight: 'bold' }}
              isRequired={true}
              onChangeItem={item3 => this.setState({ item3 })}
              value={this.state.item3}
            />




            <MaterialCommunityIcons name="email" size={30} color="#f47100" style={styles.email} />
            <TextInput placeholderTextColor = "black"
              placeholder="Email Address"
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }}
              onChangeText={email => {
                this.alphaValidEmail(email);
              }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidemail}
            </Text>




            <Feather name="phone" size={30} color="#f47100" style={styles.phone} />
            <TextInput placeholderTextColor = "black"
              placeholder="03XX XXXXXXX" maxLength={12}
              keyboardType={'phone-pad'}
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }}
              onChangeText={(phone) => { this.alphaValidphone(phone) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidphone}
            </Text>



            <AntDesign name="idcard" size={30} color="#f47100" style={styles.nic} />
            <TextInput placeholderTextColor = "black"
              placeholder="CNIC(42101 XXXXXXX X)" maxLength={15}
              keyboardType={'phone-pad'}
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }}
              onChangeText={(cnic) => { this.alphaValidcnic(cnic) }}
            />
            <Text style={{ color: 'red', marginTop: -13 }}>
              {this.state.invalidcnic}
            </Text>




            <FontAwesome name="key" size={30} color="#f47100" style={styles.password} />
            <TextInput placeholderTextColor = "black"
              placeholder="Password"
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
                width: 280,
                alignItems: 'center',
                paddingLeft: 55,
                margin: 10,
                borderRadius: 20,
              }}
              secureTextEntry={this.state.secureTextEntry}
                onChangeText={(password) => this.setState({ password })} value={this.state.password} />
            <TouchableOpacity onPress={this.onIconPress} style={styles.eyess}  >
              <AntDesign name={this.state.IconName} size={24} color="black" />
            </TouchableOpacity>






            <TouchableOpacity
               onPress={() => { this.making_api_call(this.state.email, this.state.password) }}
              style={{
                backgroundColor: '#f47100',
                height: 50,
                width: 280,
                padding: 10,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Proceed 1 of 3
              </Text>
            </TouchableOpacity>



          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  FirstName: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 158,
    right: 272,
  },
  LastName: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 235,
    right: 272,
  },
  email: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 510,
    right: 270,
  },
  phone: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 590,
    right: 270,
  },
  nic: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 665,
    right: 269,
  },
  password: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 738,
    right: 269,
  },
  eyess: {
    padding: 10,
    margin: 15,
    position: 'absolute',
    top: 745,
    right: 46,
  },
});






