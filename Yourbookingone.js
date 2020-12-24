import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import Yourbookingmain from './Yourbookingmain';

export default class YourBookings extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
        nameevent: "",
        nameuser: "",
        packages: "",
        location: "",
        datevent: "", month: "", year: "",
        hour: "", minutes: "", ampm: "",
        theme: "",
        area: "",
        guest: "",
        selecteddecor: [],
        newsdatas: [],
        datass: [],
        BookingArea : {BookingArea: null},
    }
  }


  
  componentDidMount(){
    let datass = firebase.database().ref("BookingArea");
    datass.on("value", snapshot => {
    let newsdatas = snapshot.val();
    let BookingArea = Object.values(newsdatas);
    this.setState({BookingArea});   })
    }




       render()
    {
        return(
        <View style={styles.container}>
        

         {this.state.BookingArea.length > 0
         ? 
         (
                <Yourbookingmain 
                BookingArea={this.state.BookingArea}
                navigation={this.props.navigation}
                />
        )
        :(
        <Text>Loading.....</Text>
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