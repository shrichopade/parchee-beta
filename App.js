//Default imports
import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens import
import SignIn from './screens/common/SignIn';
import SignUp from './screens/common/SignUp';
import ConfirmSignUp from './screens/common/ConfirmSignUp';
import RequestOTP from './screens/common/RequestOTP';
import ResetPassword from './screens/common/ResetPassword';
import PatientHome from './screens/patient/PatientHome';
import UploadPrescription from './screens/patient/UploadPrescription';
import PrescribeMedication from './screens/doctor/PrescribeMedication';

import DoctorHome from './screens/doctor/DoctorHome';
import ChemistHome from './screens/chemist/ChemistHome';
import OrderDetails from './screens/chemist/OrderDetails';

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const Stack = createStackNavigator();
  
export default class App extends React.Component {

  render() {
    return (  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
          <Stack.Screen name="RequestOTP" component={RequestOTP}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword}/>

          <Stack.Screen name="PatientHome" component={PatientHome}/>
          <Stack.Screen name="UploadPrescription" component={UploadPrescription}/>

          <Stack.Screen name="DoctorHome" component={DoctorHome}/>
          <Stack.Screen name="PrescribeMedication" component={PrescribeMedication}/>
          <Stack.Screen name="ChemistHome" component={ChemistHome}/>
          <Stack.Screen name="OrderDetails" component={OrderDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
