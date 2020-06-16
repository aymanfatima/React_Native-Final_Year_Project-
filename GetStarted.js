import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
export default function GetStarted({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>

      <View style={{
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: "center",
        height: 640,
        width: 380
      }}>
	
        <Image source={{ uri: 'https://github.com/aymanfatima/Python-s-Assignment-/blob/master/LOGO%20MAIN%201.png?raw=true' }}
          style={{ width: 200, height: 150, marginTop: 20, marginBottom: 50 }}/>


        <Text style={{
          fontSize: 30,
          color: 'black',
          padding: 6,
          fontWeight: "bold",
          textShadowColor: "grey",
          textShadowRadius: 15,
          textShadowOffset: { width: 3, height: 8 },
        }}>
          Welcome To </Text>

        <Text style={{
          fontSize: 30,
          color: 'black',
          padding: 6,
          fontWeight: "bold",
          textShadowColor: "grey",
          textShadowRadius: 15,
          textShadowOffset: { width: 1, height: 8 },
        }}>
          "Events For You" </Text>

        <Text style={{
          fontSize: 15,
          color: 'grey',
          padding: 10,
          textAlign: "center",
          marginBottom: 40
        }}>
          Welcome to Events For You. Find an Event Manager easily and fast.
          Are you an Event Manager? Our App allows you to offer Management
              Services to Customers</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            backgroundColor: "#f47100",
            height: 60,
            width: 410,
            padding: 10,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
            marginBottom: 0,
          }} >
          <Text style={{ fontSize: 17, color: 'black', padding: 6 }}>
            Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }
});