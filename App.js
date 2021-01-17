//Default imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens import
import SignIn from './screens/common/SignIn';
import SignUp from './screens/common/SignUp';
import PatientHome from './screens/patient/PatientHome';
import DefaultHeader from './screens/components/DefaultHeader';

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="PatientHome" component={PatientHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
