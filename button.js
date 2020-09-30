import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class button extends React.Component{
    render()
    {
        return(
                <View style = {styles.container}>
                     
                <Text 
                style={{fontWeight: "bold", fontStyle: "normal", fontSize: 25, color: "#0D47A1", marginTop: 20}}>
                MY DASHBOARD</Text>

            
                 <TouchableOpacity
                    onPress={() => navigation.navigate('EventManager')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40
                    }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>
                       INBOX</Text>
                </TouchableOpacity>

                
                <TouchableOpacity
                    onPress={() => navigation.navigate('EventManager')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 20
                    }}>
                    <Text style={{ fontSize: 20, color: 'black', padding: 6 }}>
                        MY PROFILE</Text>
                </TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
    }
})