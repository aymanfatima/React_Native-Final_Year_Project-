import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import Eventone from './Eventone';

export default class ConfirmedEvent extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
        listaccept: '',
        name: '',
        cnic: '',
        uname: '',
        newsdata1: [],
        datas1: [],
        Confirmationbase : {Confirmationbase: null},
    }
  }


  componentDidMount(){
    let datas1 = firebase.database().ref("Confirmationbase");
    datas1.on("value", snapshot => {
    let newsdata1 = snapshot.val();
    let Confirmationbase = Object.values(newsdata1);
    this.setState({Confirmationbase});   })
        }



       render()
    {
        return(
        <View style={styles.container}>
         {this.state.Confirmationbase.length > 0
         ? 
         (
                <Eventone 
                Confirmationbase={this.state.Confirmationbase}
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