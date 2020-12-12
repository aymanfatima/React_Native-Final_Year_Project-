import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import Fetchdatamanager from './fetchdatamanager';


export default class User_Dashboard extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      cnic: "",
      phone: "",
      password: "",
      data: [],
      item1: "",
      item2: "",
      item3: "",
      setModal: 'false',


      newdata: [],
      mydata: [],
      image: "",
      manager : {manager: null}
        }}



        componentDidMount(){
                let mydata = firebase.database().ref("manager");
                mydata.on("value", snapshot => {
                let newdata = snapshot.val();
                let manager = Object.values(newdata);
                this.setState({manager});
                })
            }




       render()
    {
        return(
        <View style={styles.container}>
        

         {this.state.manager.length > 0
         ? 
         (
                <Fetchdatamanager 
                manager={this.state.manager}
                />
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