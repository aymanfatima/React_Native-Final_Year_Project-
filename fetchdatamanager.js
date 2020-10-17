import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import propTypes from 'prop-types';


export default class Fetchdatamanager extends React.Component{
    static propTypes = {
        manager: propTypes.array.isRequired,
    };


    render()
    {
        return(
            <View style={styles.container}>




                    {this.props.manager.map((manager, index) =>{
                    return(
                    <View key={index}>
                    <Text>{manager.email}</Text> 
                    <Text>{manager.text}</Text> 
                    </View>
                    )})}             
                            
        
            </View>


                



        )
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center'
    }
})