import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import propTypes from 'prop-types';

export default class Fetchdatamanager extends React.Component{
    static propTypes = {
        users: propTypes.array.isRequired
    };


    render()
    {
        return(
            <View style={styles.container}>
                {this.props.users.map((users, index) => {
                    return(
                        <View key={index}>
                                <Text>{users.Name}</Text>
                                <Text>{users.email}</Text>
                                <Text>{users.phone}</Text>
                        </View>
                    )
                }
                
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