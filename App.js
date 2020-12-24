import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './GetStarted';
import SignIn from './SignIn';
import Application from './Registration';
import userregister from './userregister';
import EventManager from './EventManager';
import User_Dashboard from "./User_Dashboard";
import Gallery from './gallery';
import * as firebase from 'firebase';
import CustomerDashboard from './Dashboard';
import Galleryimage from './Galleryimage';
import ComplainArea from './ComplainArea';
import ManagerDashboard from './Managerdashboard';
import Booking from'./Booking';
import YourBookings from './Yourbookingone';
import ConfirmationForm from './NicForm';
import ConfirmedEvent from './Yourevent';


var firebaseConfig = {
  apiKey: "AIzaSyCBjviyeXl2rguFhyux1_gZrEt-NgB5vfc",
  authDomain: "eventmanagerapp-20f33.firebaseapp.com",
  databaseURL: "https://eventmanagerapp-20f33.firebaseio.com",
  projectId: "eventmanagerapp-20f33",
  storageBucket: "eventmanagerapp-20f33.appspot.com",
};
firebase.initializeApp(firebaseConfig);



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff'}} />

        <Stack.Screen name="SignIn" component={SignIn}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff'}} />


        <Stack.Screen name="Application" component={Application}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="userregister" component={userregister}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="EventManager" component={EventManager}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />   


        <Stack.Screen name="CustomerDashboard" component={CustomerDashboard}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


        <Stack.Screen name="User_Dashboard" component={User_Dashboard}
          options={
            { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />    


          <Stack.Screen name="Gallery" component={Gallery}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />  


          <Stack.Screen name="Galleryimage" component={Galleryimage}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />


         <Stack.Screen name="ComplainArea" component={ComplainArea}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />

          <Stack.Screen name="ManagerDashboard" component={ManagerDashboard}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} /> 

            <Stack.Screen name="Booking" component={Booking}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />     

          <Stack.Screen name="YourBookings" component={YourBookings}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} /> 

        <Stack.Screen name="ConfirmationForm" component={ConfirmationForm}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} /> 

          <Stack.Screen name="ConfirmedEvent" component={ConfirmedEvent}
          options={
          { headerStyle: { backgroundColor: "#0D47A1" }, headerTintColor: '#fff' }} />         


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;