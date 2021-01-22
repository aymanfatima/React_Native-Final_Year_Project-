import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, View, Text, TouchableOpacity, Switch} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

export default class CustomerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toggle: false,
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6zhiArAtcv_zPkc4amc0BQ5fJ4zAFCFfQ_Q&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc1PxLS-mFzpbco-8YPUmjIPwKPFVlJNiqFw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Q-j0Dd72wdRc3r7-ChHPEqdYkOvf2EPi0w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSstfxkImB2Lipz_H3m_xWNOTqgHTW2AHX9zQ&usqp=CAU",  // Local image
          ]
        };
    }



    render(){
        return (
            <View style = {styles.container}>
            <View>
            
            <View style={styles.main1}>
            {this.state.toggle ?  
            this.props.navigation.navigate('SignIn') 
            : <Text style={{textAlign: "center", justifyContent: "center",  fontSize: 17, fontStyle: "italic", padding: 5}}>
            Switch to Manager Sign-In</Text> }

            <Switch
            trackColor={{false: 'green', true: 'green'}}
            thumbColor="white"
            onValueChange={(value) => this.setState({toggle: value})}
            value={this.state.toggle}
            style={{marginTop: 0, size: 20}}
            />
            </View> 

            <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('UserSignIn')}
                    style={{
                        backgroundColor: "#f47100", height: 40, width: 95, position: 'absolute', right: -1, marginBottom: 10}}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: "bold", padding: 8, paddingLeft: 10}}>
                        L O G   O U T</Text>
            </TouchableOpacity>

            

            <SliderBox images={this.state.images} style={{height : 240, marginTop: 10}}/>
            </View>

            <View>
                <View style={styles.main}>
                <TouchableOpacity 
                style={styles.box}
                onPress = {() => {this.props.navigation.navigate('User_Dashboard')}}>
                <Ionicons name="md-person" size={75} color="black" />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Manager</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.box}
                onPress = {() => {this.props.navigation.navigate('ComplainArea')}}>
                <MaterialCommunityIcons name="comment-multiple" size={70} color="black" style={{marginTop: 5}} />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Complain</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Area</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}
                onPress = {() => {this.props.navigation.navigate('Galleryimage')}}>
                <Entypo name="images" size={80} color="black" style={{marginTop: 10}}/>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}
                onPress = {() => {this.props.navigation.navigate('ConfirmedEvent')}}>
                <MaterialIcons name="event-available" size={80} color="black" style={{marginTop: 10}}/>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Events</Text>
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
    marginTop: 15,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: "#d9cccc",
    height: 130,
    width: 150, 
    alignItems: 'center',

}, 
main:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
},
main1:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: "#d9cccc",
    width: "80%",
    height: 40,
    marginBottom: 5
}
})