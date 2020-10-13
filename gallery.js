import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';




const Gallery = () => {
const [modal, setModal] = useState(false);
const [image, setImage] = useState(null);


const pickfromgallery = async ()=>{
const {granted} = await Permissions.askAsyn(Permission.CAMERA_ROLL)
if(granted){
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(data)
}
else{
    Alert.alert("You need to give Permission");
}
}

const pickfromcamera = async ()=>{
    const {granted} = await Permissions.askAsyn(Permission.CAMERA)
    if(granted){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          console.log(data)
    }
    else{
        Alert.alert("You need to give Permission");
    }
    }
    





        return(
            <View style={styles.container} >
             <View style = {{marginTop: 30}}>
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
                marginTop: 40
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Upload Image
              </Text>
            </TouchableOpacity>
            </View>

          
                <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => pickfromgallery()}
                >
                    <View style={styles.modalview}>
                    <View style={styles.modalbutton}>
                    <TouchableOpacity 
                    onPress={() => setModal(false)}
                    style={{
                    backgroundColor: '#0D47A1',
                    height: 50,
                    width: 180,
                    padding: 10,
                    alignSelf: "center",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginTop: 40}}>
                    <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
                        Image From Gallery
                    </Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                    onPress={() => pickfromcamera()}
                    style={{
                    backgroundColor: '#0D47A1',
                    height: 50,
                    width: 180,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                    marginTop: 40}}>
                    <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
                       Image From Camera
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
                    marginBottom: 20,
                    marginTop: 40}}>
                    <Text style={{ fontSize: 15, color: 'white', padding: 6 }}>
                     Back to Gallery Screen
                    </Text>
                    </TouchableOpacity>
                    </View>

                    </View>


                </Modal>
        


            
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalbutton:{
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
    },
    backbutton:{
        alignItems: "center",
    },
    modalview:{
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "#dce2f5"
    }
})


export default Gallery;