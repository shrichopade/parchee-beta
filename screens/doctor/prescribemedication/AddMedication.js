import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text,Button, Form, Item, 
  Input, Label, Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'
import NewPrescription from './NewPrescription.js';

class AddMedication extends Component {

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
                    <Item stackedLabel>
                      <Label>Medication</Label>
                      <Input value={this.state.medication} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'medication')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Strength</Label>
                      <Input value={this.state.strength} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'strength')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Dosage</Label>
                      <Input value={this.state.dosage} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'dosage')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Notes</Label>
                      <Input value={this.state.note} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'note')} />
                    </Item>
                    <View style={dStyles.buttonContainer}>
                        <TouchableOpacity onPress={this.goBack} >
                          <Thumbnail small source={require('../../images/leftarrow.jfif')}/>
                        </TouchableOpacity>
                        <Button success style={dStyles.buttonStyle} >
                            <Text style={dStyles.buttonText}>Add</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Update</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Delete</Text>
                        </Button>
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

export default AddMedication;