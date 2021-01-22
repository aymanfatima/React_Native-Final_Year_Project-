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
                    style={{ width: 185, height: 140, marginTop: 20 , marginBottom: 100}} />

                <Text
                style={{color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", marginTop: 50
                ,textShadowColor: "grey",
                textShadowRadius: 15,
                textShadowOffset: { width: 3, height: 8  }}}>
                CONTINUE SIGN IN AS...</Text>


                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 320, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", marginTop: 10
                    }}>
                    <Text style={{ fontSize: 18, color: 'black', padding: 6 }}>
                        Continue As Event Manager</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('UserSignIn')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 320, padding: 10,
                        margin: 10, justifyContent: "center", alignItems: "center"
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