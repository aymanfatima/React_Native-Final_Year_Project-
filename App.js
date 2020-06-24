import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './GetStarted';
import SignIn from './SignIn';
import Registration from './Registration';
import userregister from './userregister';
import EventManager from './EventManager';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>

        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }}
        />

        <Stack.Screen name="SignIn" component={SignIn}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="Registration" component={Registration}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="userregister" component={userregister}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="EventManager" component={EventManager}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;