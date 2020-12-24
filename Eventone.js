import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Eventone extends React.Component{
    static propTypes = {
        Confirmationbase: propTypes.array.isRequired,
    };
   

    render()
    {
         return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

            {this.props.Confirmationbase.map((Confirmationbase, index) =>{
            return(
            <View key={index} style={styles.box}>
            <Text style={{fontSize: 20, color: "blue", fontWeight: "bold", marginBottom: 10}}>EVENT CONFIRMATION</Text>
            
            <View style={styles.rowalign}>
            <Text style={{fontSize:18}}>{Confirmationbase.name} {Confirmationbase.listaccept} to do {Confirmationbase.uname} event  in Your Required Time and Requirements. [ThankYou]</Text>
            </View>

            <TouchableOpacity>
                <Text 
                style={{fontSize: 20, 
                fontWeight: "bold", 
                backgroundColor: "#f47100", 
                color: "white", 
                height: 40, 
                width: 100, 
                padding: 5, 
                marginTop: 5,
                paddingLeft: 19,
                marginLeft: 240
                }}>Okaay</Text>
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
        height: 190,
        width: '100%',
        borderColor: "black",
        borderWidth: 1,
        elevation: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10
    
    },
    rowalign:{
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: "flex-start"
    }
})