import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text,Button, Form, Item, 
  Input, Label, Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'
import NewPrescription from './NewPrescription.js';


class ViewPrescription extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      totalSteps: "",
      currentStep: "",
      scanQRCode: '',
      enterOPT: '',
      searchPatient: ''
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep, uploadDocument } = props;
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

  goBack() {
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
                  <Text style={dStyles.formTitle}> Prescribe Medication - {`Step ${currentStep} of ${totalSteps}`}</Text>
                </CardItem>
                <CardItem bordered>
                  <NewPrescription/>
                </CardItem>
                <CardItem bordered style={dStyles.cardItemBodyStyle}>
                  <Form> 
                    <View style={dStyles.buttonContainer}>
                        <TouchableOpacity onPress={this.goBack} >
                          <Thumbnail small source={require('../../images/leftarrow.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.finish} >
                          <Thumbnail small source={require('../../images/submit.png')}/>
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

export default ViewPrescription;