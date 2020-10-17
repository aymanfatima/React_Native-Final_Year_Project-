import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';



export default class Eventmanagertext extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      newdata: [],
      mydata: [],
      manager: []
    };
  }



  validate_field = () => {
    const { text } = this.state;
    if (text == '') {
      alert('Kindly Fill Your Introduction');
      return false;
    }
    return true;
  };




  componentDidMount(){
    let mydata = firebase.database().ref("manager");
    mydata.on("value", snapshot => {
    let newdata = snapshot.val();
    let manager = Object.values(newdata);
    this.setState({manager});
        })
    }


    making_api_call = () => {
      if(this.validate_field())
      {      
          const manager= firebase.database().ref("manager");
          manager.push({
          text: this.state.text,              
          time: Date.now()
    })
          {this.props.navigation.navigate('Gallery')}
    }}


    render()
    {
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
                        Enter Your Introduction Here
                    </Text>
                </View>


                <View style={styles.textAreaContainer} >
                    <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type here"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={text => 
                    this.setState({ text })}
                    value={this.state.text}
                    />
                </View>
                <View>
                    <Text style={{color:'red', fontSize: 17}}>
                        Kindly! Add Your Approx Budget too*
                    </Text>
                </View>

                <View>
                <TouchableOpacity 
                onPress={() => {
                  this.making_api_call();
                }}
                style={{
                backgroundColor: '#f47100',
                height: 50,
                width: 300,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                marginTop: 60
              }}>
              <Text style={{ fontSize: 15, color: 'black', padding: 6 }}>
                Proceed 2 of 3
              </Text>
            </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textAreaContainer: {
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5
      },
      textArea: {
        height: 230,
        justifyContent: "flex-start",
        width: 320
      }
})