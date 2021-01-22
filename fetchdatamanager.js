import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Linking} from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';


export default class Fetchdatamanager extends React.Component{
    static propTypes = {
        manager: propTypes.array.isRequired
    };
   

    render()
    {
         return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

            {this.props.manager.map((manager, index) =>{
            return(
            <View key={index} style={styles.box}>
            <Image source={require('./images/background2.jpg')}
            style={{ width: 390, 
            height: 70, 
            marginBottom: 5, 
            marginLeft: 8,
            alignSelf: 'center' }}
            />

            <MaterialIcons name="location-on" size={35} color="red" style={{position: 'absolute', right: 96 , top:75 }}/>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', position: 'absolute', right: 5 , top:80 }}>{manager.item2}</Text>

           <Image source={require('./images/profile.jpg')}
            style={{ width: 100, 
            height: 100, 
            marginBottom: 5, 
            marginLeft: 8,
            marginTop: 15,
            alignSelf: 'center' }}
            />

            <View style={styles.innerbox}>
            <Text style={{fontSize: 30, fontWeight: "bold", alignSelf: 'center'}}>
            {manager.FirstName} {manager.LastName}</Text>

           
            <Text style={{fontSize: 18, textAlign: "center", fontWeight: "bold", color: 'grey', marginTop: -2}}>
            {manager.item1}</Text>
            <Text style={{fontSize: 18, textAlign: "center", fontWeight: "bold", color: 'grey', marginTop: 1}}>Email: {manager.email}</Text>
            <Text style={{fontSize: 18, textAlign: "center", fontWeight: "bold", color: 'grey', marginTop: 1}}>Domain: {manager.item3}</Text>
            <Text style={{fontSize: 18, textAlign: "center", fontWeight: "bold", color: 'grey', marginTop: 1}}>City: {manager.item2}</Text>
            </View>

                                  
            <View style={styles.introbox}>              
            <Text style={{textAlign:'center', color:"red", fontWeight:'bold', marginTop: 25, fontSize: 18}}>ABOUT ME & MY PACKAGE</Text>
            <Text style={{fontSize: 16, color: 'black',  textAlign:'center', marginTop: 2, marginBottom: 20}}>{manager.text}</Text>
            </View>

                        
            <View style={styles.flexw}>
            <TouchableOpacity 
            onPress={() => 
                {
                    let phoneNumber = ''
                    if (Platform.OS === 'android') {
                        phoneNumber = `tel:${manager.phone}`
                    }
                    else{
                        phoneNumber = 'telprompt:${1234455}'
                    }
                    
                    Linking.openURL(phoneNumber);
                }
            }
            style={{
            backgroundColor: '#0D47A1',
            height: 65,
            width: "49%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10}}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            CONTACT
            </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('Booking')}}
            style={{
            backgroundColor: '#0D47A1',
            height: 65,
            width: "49%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10
            }}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            BOOKING
            </Text>
            </TouchableOpacity>
            </View>





            
             </View>       
         )})}  

            </ScrollView>
            </SafeAreaView>
       )
    }
}



const styles = StyleSheet.create({
    container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'white',
    },
    scroll:
    {
        marginHorizontal: 20,
        margin: -10
    },
    box :{
        height: 'auto',
        width: '100%',
        borderColor: "black",
        borderWidth: 1,
        elevation: 10,
        backgroundColor: 'white',
        marginBottom: 20,
    
    },
    innerbox: {
        justifyContent: 'center',
        alignContent: 'center'
    },
  
    introbox:{
        height: 'auto',
        width: "95%",
        alignSelf: 'center',
        elevation: 5,
        borderColor: 'red',
        marginTop: 5,
        marginBottom: 5, 
        paddingLeft: 10,
        paddingRight: 10
    }, 
    flexw:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
    }
})