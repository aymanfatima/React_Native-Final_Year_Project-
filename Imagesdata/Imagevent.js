import React from 'react';
import {Image, View} from 'react-native';

export default function Imagevent(props)
{
    return(
        <View>
        <Image source={{uri: props.image}} style={{ width: 70, height: 70, alignSelf: 'center'}}
        style={{ width: "95%", 
        height: 200, 
        marginTop: 10, 
        marginBottom: 10, 
        marginLeft: 8 }}
        /> 
        </View>
    )
}