import React, { Component } from 'react';
import { View } from 'react-native';
import AnimatedMultistep from "react-native-animated-multistep";

/* Define the steps  */
import IdentifyPatient from "./prescribemedication/IdentifyPatient";
import AddTests from "./prescribetests/AddTests";
import ViewTests from "./prescribetests/ViewTests";
import SignTests from "./prescribetests/SignTests";
 

const allSteps = [
  { name: "Identify Patient", component: IdentifyPatient },
  { name: "Add Tests", component: AddTests },
  { name: "View Tests", component: ViewTests },
  { name: "Sign Tests", component: SignTests }
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
    );
  }
}