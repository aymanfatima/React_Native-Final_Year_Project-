import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import MaskedInput from 'react-native-masked-input-text';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function userregister({ navigation }) {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{
          height: 650,
          width: 360,
          backgroundColor: "white",
          alignItems: 'center', justifyContent: "center",
        }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsgVtyhw43lL2i5a6qKuhFJ2VXzz7LIu6Z3qZ6THKo711BEyoq&usqp=CAU'}}
            style={{ width: 100, height: 100}}
          />
          <Text style={{
            alignItems: 'center', justifyContent: "center", fontSize: 20,
            color: "#0D47A1",
            padding: 6,
            fontWeight: "bold"
          }}>Account as User Register </Text>

          <Ionicons name="md-person" size={24} color='#f47100' style={styles.ImageStyles} />
          <TextInput placeholder="Full Name" style={{
            height: 50, borderColor: 'black', borderWidth: 2,
            width: 280, alignItems: "center",
            paddingLeft: 55, margin: 10, borderRadius: 20
          }} />

          <MaterialCommunityIcons name="email" size={24} color="#f47100" style={styles.ImageStyles1}/>
          <TextInput placeholder="Email Address" style={{
            height: 50, borderColor: 'black', borderWidth: 2,
            width: 280, alignItems: "center",
            paddingLeft: 55, margin: 10, borderRadius: 20
          }} />

          <Feather name="phone" size={24} color="#f47100" style={styles.ImageStyle} />
          <MaskedInput placeholder="03XX-XXXXXXX" mask={'0300 0000000'} keyboardType={'phone-pad'}
            style={{
              height: 50, borderColor: 'black', borderWidth: 2,
              width: 280, alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
            }} />


          <AntDesign name="idcard" size={24} color="#f47100" style={styles.ImageStyless} />
          <MaskedInput placeholder="CNIC Number" mask={'00000 0000000 0'} keyboardType={'phone-pad'}
            style={{
              height: 50, borderColor: 'black',
              borderWidth: 2, width: 280,
              alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
            }} />

          <FontAwesome name="key" size={24} color="#f47100" style={styles.ImageStylesss} />
          <TextInput placeholder="Password"
            style={{
              height: 50, borderColor: 'black', borderWidth: 2,
              width: 280, alignItems: "center", paddingLeft: 55, margin: 10, borderRadius: 20
            }}
            secureTextEntry={true} />

          <TouchableOpacity
            onPress={() => navigation.navigate('GetStarted')}

            style={{
              backgroundColor: "#f47100", height: 50, width: 280, padding: 10, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 20
            }}>

            <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
              Register User Account</Text>
          </TouchableOpacity>
       </View></View></KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
  },
  ImageStyles: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 180,
    right: 260,
  },
  ImageStyles1: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 255,
    right: 260,
  },
  ImageStyle: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 325,
    right: 257,
  },
  ImageStyless: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 393,
    right: 257,
  },
  ImageStylesss: {
    padding: 10,
    margin: 15,
    position: "absolute",
    top: 460,
    right: 257,
  }

});
