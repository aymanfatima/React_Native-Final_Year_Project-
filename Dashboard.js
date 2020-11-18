import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Q-j0Dd72wdRc3r7-ChHPEqdYkOvf2EPi0w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6zhiArAtcv_zPkc4amc0BQ5fJ4zAFCFfQ_Q&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc1PxLS-mFzpbco-8YPUmjIPwKPFVlJNiqFw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSstfxkImB2Lipz_H3m_xWNOTqgHTW2AHX9zQ&usqp=CAU",  // Local image
          ]
        };
    }



    render(){
        return (
            <View style = {styles.container}>
            <View>
            <SliderBox images={this.state.images} style={{height : 250}}/>
            </View>

            <View>
                <View style={styles.main}>
                <TouchableOpacity 
                style={styles.box}
                onPress = {() => {this.props.navigation.navigate('User_Dashboard')}}>
                <Ionicons name="md-person" size={80} color="black" />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Manager</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.box}
                onPress = {() => {this.props.navigation.navigate('ComplainArea')}}>
                <MaterialCommunityIcons name="comment-multiple" size={80} color="black" style={{marginTop: 10}} />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Complain</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Area</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}
                onPress = {() => {this.props.navigation.navigate('Galleryimage')}}>
                <Entypo name="images" size={80} color="black" style={{marginTop: 20}}/>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Gallery</Text>
                </TouchableOpacity>
                </View>
            </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
container:
{
    flex: 1,
},
box:
{
    marginTop: 20,
    elevation: 10,
    shadowOpacity: 1,
    backgroundColor: "#d9cccc",
    height: 150,
    width: 150, 
    alignItems: 'center'
}, 
main:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}
})