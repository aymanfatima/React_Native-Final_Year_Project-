import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


export default class ComplainArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: '',
            name: '',
            texts: '',
            newsdata: [],
            datas: [],
            Complains: []
        }}



    validate_field = () => {
    const {list, name, texts} = this.state;
    if (list == '') {
    alert('Kindly Select the Complain Against Box');
    return false;
    } else if (name == '') {
    alert('Kindly Fill Person name');
    return false;
    } else if (texts == '') {
    alert('Kindly fill the complain box');
    return false;
    }
    return true;
    };




    componentDidMount(){
    let datas = firebase.database().ref("Complains");
    datas.on("value", snapshot => {
    let newsdata = snapshot.val();
    let Complains = Object.values(newsdata);
    this.setState({Complains});       })
        }


    

    making_api_call = () => {
    if(this.validate_field())
            {              
    const Complains= firebase.database().ref("Complains");
    Complains.push({
    list: this.state.list,
     name: this.state.name,
     texts: this.state.texts
    })       
   
        .catch(error => {
        alert(error);
                });
                alert ('Your Complain has been Recorded !')
                this.state.list = "",
                this.state.texts = "",
                this.state.name= ""
               }
            }    
        

    


    render(){
        return(
        <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.text}>COMPLAIN AREA</Text>



            <View style = {styles.secondContainer}>
            <View>
            <Text style={{color: "blue", marginTop: 30, fontWeight: 'bold'}}>Complain Against</Text>
            <DropDownPicker
            items={[
            {label: 'User (Customer)',
            value: 'User (Customer)',},

            {label: 'Event Manager',
            value: 'Event Manager',}
            ]}
            dropDownStyle={{ marginTop: 5 }}
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                borderColor: 'black',
                marginTop: -10,
                borderWidth: 2
            }}
              itemStyle={{
                alignItems: 'flex-start',
                fontSize: 25,
                color: 'white',
            }}
            activeLabelStyle={{ color: 'red' }}
            placeholder="Complain Against"
            containerStyle={{ height: 50, width: 290, marginTop: 10 }}
            isRequired={true}
            onChangeItem={item => this.setState({
            list: item.value })}
            />







            <Text style={{color: "blue", marginTop: 20, fontWeight: 'bold'}}>
            His/Her Name</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Enter His/Her Name" 
              maxLength={15}
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 290,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(name) => this.setState({ name })} value={this.state.name} 
            />



           <Text style={{color: "blue", marginTop: 20, fontWeight: 'bold'}}>  
            Write your Complain here</Text>
            <View style = {styles.textAreaContainer}>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type here"
            placeholderTextColor="black"
            numberOfLines={6}
            multiline={true}
            onChangeText={texts => this.setState({ texts })} value={this.state.texts}
            /></View>





         <TouchableOpacity
          onPress={() => { this.making_api_call() }}
          style={{
            backgroundColor: "#f47100",
            height: 50,
            width: 290,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }} >
          <Text style={{ fontSize: 20, color: 'black', padding: 6, fontWeight: "bold" }}>
            S U B M I T</Text>
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
    // elevation : 5,
    height: 530,
    width: 380,
    borderColor: "orange",
    marginTop: 5,
    alignItems: 'center',
    marginLeft: 20,
    borderRadius:10
},
text:{
    fontSize: 35,
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