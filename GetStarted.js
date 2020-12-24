import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
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


        <Text style={styles.text}>
          Welcome To </Text>

        <Text style={{
          fontSize: 32,
          color: 'black',
          padding: 6,
          fontWeight: "bold",
          textShadowColor: "grey",
          textShadowRadius: 15,
          textShadowOffset: { width: 3, height: 8  },
        }}>
          "Events For You" </Text>

        <Text style={{
          fontSize: 17,
          color: 'grey',
          padding: 10,
          textAlign: "center",
          marginBottom: 30
        }}>
          Welcome to Events For You. Find Wedding Event Manager easily and fast.
          Are you the Wedding Event Planner? Our App allows you to offer Management
              Services to Customers</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Application')}
          style={{
            backgroundColor: "#f47100",
            height: 65,
            width: 420,
            padding: 10,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
            marginBottom: 0,
          }} >
          <Text style={{ fontSize: 17, color: 'black', padding: 6, fontWeight: "bold" }}>
            G E T  S T A R T E D</Text>
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
  },
  text:
  {
    fontSize: 32,
    color: 'black',
    padding: 6,
    fontWeight: "bold",
    textShadowColor: "grey",
    textShadowRadius: 15,
    textShadowOffset: { width: 3, height: 8 }
  }
});