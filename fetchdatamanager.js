import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Linking} from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



export default class Fetchdatamanager extends React.Component{
    static propTypes = {
        manager: propTypes.array.isRequired,
    };
   

    render()
    {
         return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

            {this.props.manager.map((manager, index) =>{
            return(
            <View key={index} style={styles.box}>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc1PxLS-mFzpbco-8YPUmjIPwKPFVlJNiqFw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc1PxLS-mFzpbco-8YPUmjIPwKPFVlJNiqFw&usqp=CAU"}} style={{ width: 70, height: 70, alignSelf: 'center'}}
            style={{ width: 390, 
            height: 230, 
            marginBottom: 5, 
            marginLeft: 8,
            alignSelf: 'center' }}
            />

            <View style={styles.innerbox}>
            
            <Text style={{fontSize: 30, fontWeight: "bold", alignSelf: 'center'}}>
            {manager.FirstName} {manager.LastName}</Text>

           
            <Text style={{fontSize: 18, textAlign: "center", marginBottom: -5, fontWeight: "bold", color: 'red'}}>
            {manager.item1}</Text>
            <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold',textAlign: "center"}}>{manager.item2}</Text>
            </View>


            <View style={styles.introbox}>
            <Text style={{textAlign:'center', color:"#f47100", fontWeight:'bold', marginTop: 20}}>ABOUT ME & MY PACKAGE</Text>
            <Text style={{textAlign:'center'}}>{manager.text}</Text>
            </View>

            
            

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
            width: "100%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10}}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            C O N T A C T
            </Text>
            </TouchableOpacity>
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
        height: 588,
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
        height: 190,
        width: "90%",
        alignSelf: 'center',
        elevation: 10,
        borderColor: 'grey'
    }
})