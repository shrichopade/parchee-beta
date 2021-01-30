import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content} from 'native-base';
import AnimatedMultistep from "react-native-animated-multistep";

/* Define the steps  */
import IdentifyPatient from "./prescribemedication/IdentifyPatient";
import AddTests from "./prescribetests/AddTests";
import ViewTests from "./prescribetests/ViewTests";
import SignTests from "./prescribetests/SignTests";
import DoctorHeader from './DoctorHeader.js';
import DoctorFooter from './DoctorFooter.js';

const allSteps = [
  { name: "Identify Patient", component: IdentifyPatient },
  { name: "Add Tests", component: AddTests },
  { name: "View Tests", component: ViewTests }
  ];

/* Define your class */
export default class PrescribeTests extends Component {
  /* define the method to be called when you go on next step */

  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  finish = finalState => {
    console.log(finalState);
  };

  /* render MultiStep */
  render() {
    return (
      <Container>
          <DoctorHeader navigation={this.props.navigation}/>
          <Content>
            <View style={{ flex: 1 }}>
              <AnimatedMultistep
                steps={allSteps}
                onFinish={this.finish}
                onBack={this.onBack}
                onNext={this.onNext}
                comeInOnNext="bounceInUp"
                OutOnNext="bounceOutDown"
                comeInOnBack="bounceInDown"
                OutOnBack="bounceOutUp"
              />
            </View>
          </Content>
          <DoctorFooter navigation={this.props.navigation}/>
      </Container>
    );
  }
}