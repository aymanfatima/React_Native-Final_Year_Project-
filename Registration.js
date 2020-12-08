import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Application({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{
                height: 640,
                width: 400,
                backgroundColor: "white",
                alignItems: 'center', justifyContent: "center",
            }}>

                <Image source={{ uri: 'https://github.com/aymanfatima/Python-s-Assignment-/blob/master/LOGO%20MAIN%201.png?raw=true' }}
                    style={{ width: 160, height: 120, marginTop: 20 , marginBottom: 20}} />

                <Text
                style={{color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", 
                marginLeft: 60, marginRight: 60, marginTop: 10
                ,textShadowColor: "grey",
                textShadowRadius: 15,
                textShadowOffset: { width: 3, height: 8  }}}>
                W E L C O M E   T O </Text>

                <Text
                style={{color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", 
                marginLeft: 60, marginRight: 60, marginTop: 10
                ,textShadowColor: "grey",
                textShadowRadius: 15,
                textShadowOffset: { width: 3, height: 8  }}}>
                O U R</Text>

                <Text
                style={{color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", 
                marginLeft: 60, marginRight: 60, marginTop: 10 ,textShadowColor: "grey",
                textShadowRadius: 15,
                textShadowOffset: { width: 3, height: 8  }}}>
                A P P L I C A T I O N</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ManagerDashboard')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", marginTop: 100
                    }}>
                    <Text style={{ fontSize: 18, color: 'black', padding: 6 }}>
                        Continue As Event Manager</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('CustomerDashboard')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center"
                    }}>
                    <Text style={{ fontSize: 18, color: 'black', padding: 6 }}>
                        Continue as Customer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
    }

});
