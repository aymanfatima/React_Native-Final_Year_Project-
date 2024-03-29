import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Yourbookingmain extends React.Component{
    static propTypes = {
        BookingArea: propTypes.array.isRequired
    };
   

    render()
    {
         return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

            {this.props.BookingArea.map((BookingArea, index) =>{
            return(
            <View key={index} style={styles.box}>
            <Text style={{fontSize: 20, color: "blue", fontWeight: "bold", marginBottom: 10}}>BOOKINGS</Text>
            
            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Your Name:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.nameevent}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Customer Name:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.nameuser}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Customer Address:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.location}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Package:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.packages}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Date:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.datevent}</Text>
            <Text> - </Text>
            <Text style={{fontSize:18}}>{BookingArea.month}</Text>
            <Text> - </Text>
            <Text style={{fontSize:18}}>{BookingArea.year}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Timings:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.hour}</Text>
            <Text style={{fontSize:18}}> (Hours)</Text>
            <Text style={{fontSize:18}}>{BookingArea.minutes}</Text>
            <Text style={{fontSize:18}}> (Minutes) </Text>
            <Text style={{fontSize:18}}>{BookingArea.ampm}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Theme Color:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.theme}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Area (in Square feets):  </Text>
            <Text style={{fontSize:18}}>{BookingArea.area}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Number of Guests:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.guest}</Text>
            </View>

            <View style={styles.rowalign}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Customization:  </Text>
            <Text style={{fontSize:18}}>{BookingArea.requirementdecoration}</Text>
            </View>

            <TouchableOpacity  
            onPress={() => {this.props.navigation.navigate('ConfirmationForm')}}>
                <Text 
                style={{fontSize: 20, 
                fontWeight: "bold", 
                backgroundColor: "#f47100", 
                color: "white", 
                height: 40, 
                width: 150, 
                padding: 5, 
                marginTop: 10,
                paddingLeft: 10
                }}>Accept/Reject</Text>
            </TouchableOpacity>
         
         
             </View>       
         )})}  

            </ScrollView>
            </SafeAreaView>
       )
    }
}



const styles = StyleSheet.create({
    container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'white',
    },
    scroll:
    {
        marginHorizontal: 20,
        margin: -10
    },
    box :{
        height: 'auto',
        width: '100%',
        borderColor: "black",
        borderWidth: 1,
        elevation: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10
    
    },
    rowalign:{
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: "flex-start"
    }
})