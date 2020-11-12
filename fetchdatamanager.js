import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Linking} from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';



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
            <View style={styles.innerbox}>
            <Image source={{ uri: 'data:image/png;base64,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' }}
            style={{ width: 70, height: 70, alignSelf: 'center'}}/>
            <Text style={{fontSize: 30, textAlign: "center", fontWeight: "bold", marginBottom: 0}}>
            {manager.FirstName} {manager.LastName}</Text>
            <Text style={{fontSize: 15, textAlign: "center", marginBottom: 0, fontWeight: "bold"}}>
            {manager.item1}</Text>

                
            <MaterialIcons name="location-on" size={27} color="red" style={{ position: 'absolute', top: 130, left: 65}} />
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>{manager.item2}</Text>
            </View>


            <View style={styles.introbox}>
            <Text style={{textAlign:'center', color:"#f47100", fontWeight:'bold'}}>ABOUT ME & MY PACKAGE</Text>
            <Text style={{textAlign:'center'}}>{manager.text}</Text>
            </View>
            
            <Image source={{ uri: 'https://eventmanagementpak.files.wordpress.com/2013/11/296252_147040328721269_147008648724437_246728_2308363_n.jpg' }}
             style={{ width: "95%", height: 200, marginTop: 10, marginBottom: 10, marginLeft: 8 }}/>
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
            height: 50,
            width: 170,
            justifyContent: 'center',
            alignSelf: 'center',}}>
            <MaterialIcons name="call" size={33} color="white" style={{position: 'absolute', top : 9, left: 10}}/>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center'}}>
            Contact
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
        height: 650,
        width: '100%',
        borderColor: "black",
        borderWidth: 6,
        backgroundColor: 'white',
        marginBottom: 20
    
    },
    innerbox: {
        marginRight: 50,
        marginTop: 5,
        marginLeft: 30
    },
    modalview:{
        position: "absolute",
        bottom: 0.5,
        width: "100%",
        backgroundColor: "#dce2f5"
    },
    introbox:{
        borderColor: "black",
        height: 170,
        width: "95%",
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 5
    }
})