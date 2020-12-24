import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput } from 'react-native-gesture-handler';
import SelectMultiple from 'react-native-select-multiple';
import * as firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const decoration = ['Balloons', 'Party Popper', 'Cake', 'Candle', 'Flowers', 'Disco Lights']

const renderLabel = (label) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', height: 35, width: 200}}>
        <Text style={{fontSize: 16, fontWeight: "400"}}>{label}</Text>
      </View>
  )
}


export default class Booking extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            nameevent: "",
            nameuser: "",
            packages: "",
            location: "",
            datevent: "", month: "", year: "",
            hour: "", minutes: "", ampm: "",
            theme: "",
            area: "",
            guest: "",
            selecteddecor: [],
            newsdatas: [],
            datass: [],
            BookingArea: []
        }
      }

      onSelectionsChange = (selecteddecor) =>{
        this.setState({selecteddecor})
      }
   


      validate_field = () => {
        const {nameevent, nameuser, packages, location, datevent, month, year, hour, minutes, ampm, area, theme, guest, selecteddecor} = this.state;
        if (nameevent == '') {
        alert('Enter Manager Name');
        return false;
        } 
        else if ( nameuser == '') {
        alert('Enter Your Name');
        return false;
        }
        else if ( packages == '') {
        alert('Kindly Select one Package');
        return false;
        }
        else if ( location == '') {
        alert('Kindly Enter your Postal Address');
        return false;
        }
        else if ( datevent == '') {
        alert('Kindly Select your event date');
        return false;
        }
        else if ( month == '') {
        alert('Kindly Select Month of Event');
        return false;
        }
        else if ( year == '') {
        alert('Kindly Select year of event');
        return false;
        }
        else if ( hour == '') {
        alert('Kindly Select hours');
        return false;
        }
        else if ( minutes== '') {
        alert('Kindly Select minutes');
        return false;
        }
        else if ( ampm == '') {
        alert('Kindly select the time properly, either it is AM or PM');
        return false;
        }
        else if ( theme == '') {
        alert('Kindly Enter your Theme Color');
        return false;
        }
        else if ( area == '') {
        alert('Kindly Enter your location length in square feets');
        return false;
        }  
        else if ( guest== '') {  
        alert('Kindly enter number of guests');
        return false;
        }
        else if ( selecteddecor== '') {  
        alert('Kindly select decoration items');
        return false;
        }
        return true;
        };




        componentDidMount(){
          let datass = firebase.database().ref("BookingArea");
          datass.on("value", snapshot => {
          let newsdatas = snapshot.val();
          let BookingArea = Object.values(newsdatas);
          this.setState({BookingArea});   })
          }
        
      


        making_api_call = () => {
          if(this.validate_field())
                  {              
          const Complains= firebase.database().ref("BookingArea");
          Complains.push({
          ManagerName: this.state.nameevent,
          UserName: this.state.nameuser,
          MoneyPackage: this.state.packages,
          PostalAddress: this.state.location,
          DateOfEvent: this.state.datevent,
          Month: this.state.month,
          Year: this.state.year,
          Hours: this.state.hour,
          Minutes: this.state.minutes,
          AMPM: this.state.ampm,
          ThemeColor: this.state.theme,
          area: this.state.area,
          guest: this.state.guest,
          selectedItem:this.state.selecteddecor
          })       
         
          .catch(error => {
          alert(error);
          });
                             
          alert ('Your Request has been submitted. Check Booking Tab for Confirmation')
          this.state.nameevent = "",
          this.state.nameuser = "",
          this.state.location = "",
          this.state.packages = "",
          this.state.datevent = "",
          this.state.month = "",
          this.state.selecteddecor = "",
          this.state.guest = "",
          this.state.area = "",
          this.state.theme = "",
          this.state.year = "",
          this.state.hour = "",
          this.state.ampm = "",
          this.state.minutes = ""
        }}
              
      
    


    render(){
        return(
            <KeyboardAwareScrollView style={styles.container}>
            <Text style={styles.text}>BOOKING AREA</Text>
            <View style = {styles.secondContainer}>
            <View>


             <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter Event Manager Name</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Enter Name" 
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(nameevent) => this.setState({ nameevent })} value={this.state.nameevent} 
            />




            <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter your Name here</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Enter Name" 
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(nameuser) => this.setState({ nameuser })} value={this.state.nameuser} 
            />


    
    
              
                <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Select Package</Text>
                <DropDownPicker
                items={[
                {label: 'Less than 10k', value: 'Less than 10k',},
                {label: '10k-20k', value: '10k-20k',},
                {label: '20k-30k', value: '20k-30k',},
                {label: '30k-40k', value: '30k-40k',},
                {label: '40K above', value: '40K above',},
                ]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Package"
                containerStyle={{ height: 45, width: 300, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                packages: item.value })}
                />






       
            <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter your Location</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Location" 
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(location) => this.setState({ location })} value={this.state.location} 
            />




                
       
                <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Select Date of Event</Text>
                <View style={styles.dateevent}>
                <DropDownPicker
                items={[
                {label: '1', value: '1',},
                {label: '2', value: '2',},
                {label: '3', value: '3',},
                {label: '4', value: '4',},
                {label: '5', value: '5',},
                {label: '6', value: '6',},
                {label: '7', value: '7',},
                {label: '8', value: '8',},
                {label: '9', value: '9',},
                {label: '10', value: '10',},
                {label: '11', value: '11',},
                {label: '12', value: '12',},
                {label: '13', value: '13',},
                {label: '14', value: '14',},
                {label: '15', value: '15',},
                {label: '16', value: '16',},
                {label: '17', value: '17',},
                {label: '18', value: '18',},
                {label: '19', value: '19',},
                {label: '20', value: '20',},
                {label: '21', value: '21',},
                {label: '22', value: '22',},
                {label: '23', value: '23',},
                {label: '24', value: '24',},
                {label: '25', value: '25',},
                {label: '26', value: '26',},
                {label: '27', value: '27',},
                {label: '28', value: '28',},
                {label: '29', value: '29',},
                {label: '30', value: '30',},
                {label: '31', value: '31',},]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Date"
                containerStyle={{ height: 45, width: 80, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                  datevent: item.value })}
                />
  


            <DropDownPicker
                items={[
                {label: 'January', value: 'January',},
                {label: 'Feburary', value: 'Feburary',},  
                {label: 'March', value: 'March',}, 
                {label: 'April', value: 'April',}, 
                {label: 'May', value: 'May',}, 
                {label: 'June', value: 'June',}, 
                {label: 'July', value: 'July',}, 
                {label: 'August', value: 'August',}, 
                {label: 'September', value: 'September',}, 
                {label: 'October', value: 'October',}, 
                {label: 'November', value: 'November',}, 
                {label: 'December', value: 'December',},        
             ]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Month"
                containerStyle={{ height: 45, width: 120, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                month: item.value })}
                />




               <DropDownPicker
                items={[
                {label: '2021', value: '2021',},
                {label: '2022', value: '2022',},
                {label: '2023', value: '2023',},
                {label: '2024', value: '2024',},
                {label: '2025', value: '2025',},
                {label: '2026', value: '2026',},
                {label: '2027', value: '2027',},
                {label: '2028', value: '2028',},
                {label: '2029', value: '2029',},
                {label: '2030', value: '2030',},
                    
             ]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Year"
                containerStyle={{ height: 45, width: 100, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                year: item.value })}
                /> 
                </View>





                <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>BookingTime</Text>
                <View style={styles.dateevent}>
                <DropDownPicker
                items={[
                {label: '1', value: '1',},
                {label: '2', value: '2',},
                {label: '3', value: '3',},
                {label: '4', value: '4',},
                {label: '5', value: '5',},
                {label: '6', value: '6',},
                {label: '7', value: '7',},
                {label: '8', value: '8',},
                {label: '9', value: '9',},
                {label: '10', value: '10',},
                {label: '11', value: '11',},
                {label: '12', value: '12',},]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Hours"
                containerStyle={{ height: 45, width: 90, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                hour: item.value })}
                />







            <DropDownPicker
                items={[
                {label: '00', value: '00',},
                {label: '15', value: '15',},
                {label: '30', value: '30',},
                {label: '45', value: '45',}]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Minutes"
                containerStyle={{ height: 45, width: 120, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                minutes: item.value })}
                />






                <DropDownPicker
                items={[
                {label: 'AM', value: 'AM',},
                {label: 'PM', value: 'PM',},]}
                dropDownStyle={{ marginTop: -5, borderColor: "grey"}}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderColor: 'black',
                    marginTop: -10,
                    borderWidth: 2
                }}
                  itemStyle={{
                    alignItems: 'flex-start',
                    fontSize: 40,
                    color: 'black',
                }}
                activeLabelStyle={{ color: 'red' }}
                placeholder="Time"
                containerStyle={{ height: 45, width: 90, marginTop: 10 }}
                isRequired={true}
                onChangeItem={item => this.setState({
                ampm: item.value })}
                /></View>
                



            <Text style={{color: "black", marginLeft: 10, marginTop: 50,fontSize: 27, fontWeight: "bold"}}>YOUR REQUIREMENTS</Text>
            <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter Your Theme Color</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Theme Color" 
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(theme) => this.setState({ theme })} value={this.state.theme} 
            />


            <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter Location (area) in Square.feets</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Areaa" 
              style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(area) => this.setState({ area })} value={this.state.area} 
            />


      
              <Text style={{color: "blue", marginTop: 15, fontWeight: 'bold'}}>Enter Number of Guest</Text>
            <TextInput placeholderTextColor = "black"
              placeholder="Guest" 
               style={{
                height: 55,
                borderColor: 'black',
                borderWidth: 2,
                width: 300,
                alignItems: 'center',
                paddingLeft: 20,
              }}
              onChangeText={(guest) => this.setState({ guest })} value={this.state.guest} 
            />



        <Text style={{color: "black", marginLeft: 20, marginBottom:0, marginTop: 50,fontSize: 27, fontWeight: "bold"}}>DECORATION ITEMS</Text>
 
      
        <SelectMultiple 
        renderLabel={renderLabel}
        items={decoration}
        selectedItems={this.state.selecteddecor}
        onSelectionsChange={this.onSelectionsChange}
        />
    
    
    <TouchableOpacity
          onPress={() => { this.making_api_call() }}
          style={{
            backgroundColor: "#f47100",
            height: 50,
            width: 300,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: -5
          }} >
          <Text style={{ fontSize: 25, color: 'black', padding: 6, fontWeight: "300" }}>
            B O O K I N G</Text>
        </TouchableOpacity>
    
    
    
                </View></View>
                </KeyboardAwareScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        fontSize: 35,
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: 10, 
        color: "black",
        marginBottom: 0
    },
    secondContainer:{
        height: 1440,
        width: 380,
        borderColor: "orange",
        marginTop: 5,
        alignItems: 'center',
        marginLeft: 20,
        borderRadius:10
    },
    dateevent:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
})