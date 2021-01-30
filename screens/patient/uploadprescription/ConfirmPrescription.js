import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Container, Content, Text, Form, Item, 
  Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'

class ConfirmPrescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: ""
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack = () => {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;

    return (
      <Container style={dStyles.container}>
        <Content>
          <Card style={dStyles.cardStyle}>
            <CardItem header bordered>
              <Text style={dStyles.formTitle}> Confirm Prescription - {`Step ${currentStep} of ${totalSteps}`}</Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
              <Form>
                <Item stackedLabel>
                  <Image source={require('../../images/prescription.jfif')} style={dStyles.imagePrescription} />
                </Item>
                <View style={dStyles.buttonContainer}>
                  <TouchableOpacity onPress={this.goBack} >
                    <Thumbnail small source={require('../../images/leftarrow.jfif')}/>
                  </TouchableOpacity>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <TouchableOpacity onPress={this.nextStep} >
                    <Thumbnail small source={require('../../images/rightarrow.jfif')}/>
                  </TouchableOpacity>
                </View>
              </Form>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default ConfirmPrescription;