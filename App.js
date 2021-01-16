//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens import
import SignIn from './screens/common/SignIn';
import SignUp from './screens/common/SignUp';
import PatientHome from './screens/patient/PatientHome';

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} 
            options={{
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTitleStyle: {
                color:'#ffffff'
              },
            }}
        />
        <Stack.Screen name="SignUp" component={SignUp} 
            options={{
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTitleStyle: {
                color:'#ffffff'
              },
            }}
        />
        <Stack.Screen name="PatientHome" component={PatientHome} 
          options={{
            headerStyle: {
              backgroundColor: 'green',
            },
            headerRight: () => (
              <img src='./screens/images/avatar-photo.jpg' width="40" height="40"/>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
