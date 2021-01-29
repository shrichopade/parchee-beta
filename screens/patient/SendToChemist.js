import React, { Component } from 'react';
import { View } from 'react-native';
import AnimatedMultistep from "react-native-animated-multistep";

/* Define the steps  */
import SelectMedicine from "./uploadprescription/SelectMedicine";
import SelectDelivery from "./uploadprescription/SelectDelivery";
import SelectChemist from "./uploadprescription/SelectChemist";

const allSteps = [
  { name: "Select Medicines", component: SelectMedicine },
  { name: "Select Delivery", component: SelectDelivery },
  { name: "Select Chemist", component: SelectChemist }
];

/* Define your class */
export default class SendToChemist extends Component {
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