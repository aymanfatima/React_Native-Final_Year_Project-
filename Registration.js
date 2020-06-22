import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Registration({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{
                height: 640,
                width: 360,
                backgroundColor: "white",
                alignItems: 'center', justifyContent: "center",
            }}>
                <Image source={{ uri: 'https://github.com/aymanfatima/Python-s-Assignment-/blob/master/LOGO%20MAIN%201.png?raw=true' }}
                    style={{ width: 200, height: 150 }} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('userregister')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 250
                    }}>
                    <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                        Customer Registration</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('managerRegister')}
                    style={{
                        backgroundColor: "#f47100", height: 60, width: 300, padding: 10,
                        margin: 20, justifyContent: "center", alignItems: "center", borderRadius: 20
                    }}>
                    <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                        Event Manager Registration</Text>
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
