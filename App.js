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
import ResetPasswd from './screens/common/ResetPasswd';
import ConfirmSignUp from './screens/common/ConfirmSignUp';
import PatientHome from './screens/patient/PatientHome';
import UploadPrescription from './screens/patient/UploadPrescription';

import DoctorHome from './screens/doctor/DoctorHome';
import ChemistHome from './screens/chemist/ChemistHome';

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
        <Stack.Screen name="ResetPasswd" component={ResetPasswd}/>
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
        <Stack.Screen name="PatientHome" component={PatientHome}/>
        <Stack.Screen name="DoctorHome" component={DoctorHome}/>
        <Stack.Screen name="ChemistHome" component={ChemistHome}/>
        <Stack.Screen name="UploadPrescription" component={UploadPrescription}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
