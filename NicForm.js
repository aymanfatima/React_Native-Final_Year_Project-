import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ConfirmationForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listaccept: '',
            name: '',
            cnic: '',
            uname: '',
            newsdata1: [],
            datas1: [],
            Confirmationbase: [], 
        }}



    validate_field = () => {
    const {listaccept, name, cnic, uname} = this.state;
    if (name == '') {
    alert('Kindly Fill Your Name');
    return false;
    }
    if (uname == '') {
    alert('Kindly Fill Customer name');
    return false;
    }
    else if (cnic == '') {
    alert('Kindly fill CNIC');
    return false;
    }
    else if (listaccept == '') {
    alert('Kindly Select the Accept/Reject Confimration');
    return false;
    }
    return true;
    };




    componentDidMount(){
    let datas1 = firebase.database().ref("Confirmationbase");
    datas1.on("value", snapshot => {
    let newsdata1 = snapshot.val();
    let Confirmationbase = Object.values(newsdata1);
    this.setState({Confirmationbase});   })
        }


    

    making_api_call = () => {
    if(this.validate_field())
            {              
    const Confirmationbase= firebase.database().ref("Confirmationbase");
    Confirmationbase.push({
    name: this.state.name,
    uname: this.state.uname,
    cnic: this.state.cnic,
    listaccept: this.state.listaccept,
    })       
   
        .catch(error => {
        alert(error);
            });
                alert ('You Have Confirmed the Order')
                this.state.name = "",
                this.state.uname = "",
                this.state.listaccept = "",
                this.state.cnic= ""
               }
            }    
        

    


    render(){
        return(
        <KeyboardAwareScrollView style={styles.container}>

            <View style = {styles.secondContainer}>
            <Text style={styles.text}>Confirmation Form</Text>
            <View>

            <Text style={{color: "black", marginTop: 10, fontWeight: 'bold'}}>
            Enter Your Name</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Enter Your Name" 
              style={{
                height: 45,
                borderColor: 'blue',
                borderWidth: 2,
                width: 290,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(name) => this.setState({ name })} value={this.state.name} 
            />


        <Text style={{color: "black", marginTop: 20, fontWeight: 'bold'}}>
            Enter Customer Name</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Enter Customer Name" 
              style={{
                height: 45,
                borderColor: 'blue',
                borderWidth: 2,
                width: 290,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(uname) => this.setState({ uname })} value={this.state.uname} 
            />


         <Text style={{color: "black", marginTop: 20, fontWeight: 'bold'}}>
            Enter Your CNIC</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="CNIC" 
              keyboardType="number-pad"
              style={{
                height: 45,
                borderColor: 'blue',
                borderWidth: 2,
                width: 290,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(cnic) => this.setState({ cnic })} value={this.state.cnic} 
            />
            

            <Text style={{color: "black", marginTop: 20, fontWeight: 'bold'}}>Accept/Reject</Text>
            <DropDownPicker
            items={[
            {label: 'Accept', value: 'Accept',},
            {label: 'Reject', value: 'Reject',}
            ]}
            dropDownStyle={{ marginTop: 5 }}
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                borderColor: 'blue',
                marginTop: -10,
                borderWidth: 2
            }}
              itemStyle={{
                alignItems: 'flex-start',
                fontSize: 25,
                color: 'white',
            }}
            activeLabelStyle={{ color: 'red' }}
            placeholder="Accept Or Reject"
            containerStyle={{ height: 40, width: 290, marginTop: 10 }}
            isRequired={true}
            onChangeItem={item => this.setState({
            listaccept: item.value })}
            />




         <TouchableOpacity
          onPress={() => { this.making_api_call() }}
          style={{
            backgroundColor: "#f47100",
            height: 45,
            width: 140,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginLeft: 70
          }} >
          <Text style={{ fontSize: 20, color: 'black', padding: 6, fontWeight: "bold" }}>
            SUBMIT</Text>
        </TouchableOpacity>



            </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex: 1
},
secondContainer:{
    height: 470,
    width: 380,
    borderColor: "orange",
    marginTop: 5,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 60
},
text:{
    fontSize: 30,
    fontWeight: 'bold', 
    textAlign: 'center',
    marginTop: 10, 
    color: "black"
},
textArea: {
    height: 150,
    justifyContent: "flex-start",
    width: 200
},
textAreaContainer: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 5
  },

})