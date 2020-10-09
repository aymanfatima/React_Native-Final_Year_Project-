import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import propTypes from 'prop-types';
import * as firebase from 'firebase';
import Fetchdatamanager from './fetchdatamanager';


export default class User_Dashboard extends React.Component{
    static propTypes = {
        users: propTypes.array.isRequired
    };



    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            email: "",
            cnic: "",
            phone: "",
            data: [],
            mydata: [],
            users:[],
        }}



        componentDidMount(){
            let mydata = firebase.database().ref("users");
            mydata.on("value", snapshot => {
            let data = snapshot.val();
            let users = Object.values(data);
            this.setState({users});
                })
            }




    render()
    {
        return(
        <View style={styles.container}>

         {this.state.users.length > 0 
         ? 
         (
        <Fetchdatamanager users={this.state.users} />
        )
        :(
        <Text>No data found</Text>
        )}       

        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center'
    }
})