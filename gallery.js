import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from './utilities/UserPermission';
import Fire from './Fire';





export default function Gallery() { 
  const [image, setImage] = useState(null)
  const [modal, setModal] = useState(false);

  
  


  useEffect(() => {
   UserPermissions.getPermissionAsync()
  }, [])


  const upload = () => {
    Fire.shared.addPhoto(image,).then(()=>{
      setImage(null)


    })
    .catch(err=>{
      alert(err.message)
    })
  }
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2,2],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri)
    }
  };

  return (
    <SafeAreaView  style={styles.container} >
    <View style = {{marginTop: 10}}>
           <Text
            style={{
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: 25,
               color: '#0D47A1',
               padding: 6,
               fontWeight: 'bold' 
            }}>
              Upload Images For Portfolio
           </Text>
       </View>



       <View>
       <TouchableOpacity 
       onPress={() => setModal(true)}
       style={{
       backgroundColor: '#f47100',
       height: 50,
       width: 300,
       padding: 10,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 10
     }}>
     <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
       Upload Image
     </Text>
   </TouchableOpacity>
   </View>


   <View style={{marginHorizontal:20, marginTop:35, height:170, width: 250}}>
    {image === null? 
    <Text style={{textAlign: 'center'}}>No image is selected</Text>: 
    <View>
    <Image source={{uri:image}} 
    style={{width:'100%', height:'100%'}}></Image>
     <TouchableOpacity 
           onPress={() => {upload()}}
           style={{
           backgroundColor: '#f47100',
           height: 50,
           width: 250,
           padding: 10,
           alignItems: "center",
           justifyContent: 'center',
           marginTop: 10}}>
           <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
              Submit
           </Text>
        </TouchableOpacity>
    </View>
    }
    </View>
       


          
       <Modal
       animationType="slide"
       transparent={true}
       visible={modal}
       onRequestClose={() => setModal(false)}
       >
           <View style={styles.modalview}>
           <View style={styles.modalbutton}>
           <TouchableOpacity 
           onPress={() => {pickImage()}}
           style={{
            backgroundColor: '#0D47A1',
            height: 50,
            width: 300,
            padding: 10,
            justifyContent: 'center',
            alignItems: "center",
            marginBottom: 20,
            marginTop: 10}}>
           <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
               Select From Gallery
           </Text>
           </TouchableOpacity>


          
           </View>


           <View style={styles.backbutton}>
           <TouchableOpacity 
           onPress={() => setModal(false)}
           style={{
           backgroundColor: '#0D47A1',
           height: 50,
           width: 300,
           padding: 10,
           justifyContent: 'center',
           alignItems: 'center',
           marginBottom: 10,
           marginTop: 7}}>
           <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
            Back to Gallery Screen
           </Text>
           </TouchableOpacity>
           </View>

           </View>


       </Modal>



   
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalbutton:{
        alignItems: "center",
    },
    backbutton:{
        alignItems: "center",
    },
    modalview:{
        position: "absolute",
        bottom: 1,
        width: "100%",
        backgroundColor: "#dce2f5"
    }
})
