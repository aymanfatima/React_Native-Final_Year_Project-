import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ImageEvent from './Imagesdata/ImageEvent';
import Imagevent from './Imagesdata/Imagevent';

export default class Galleryimage extends React.Component {
    render(){
        return(
            <ScrollView style={styles.container}>
            <Text style={{ fontSize: 40, color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            G A L L E R Y
            </Text>

            {ImageEvent.map((data, id) =>{
            return(
            <View key={id}>
            <Imagevent key={data.id} 
            image={data.image}
            /></View>
            )}
            )}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})