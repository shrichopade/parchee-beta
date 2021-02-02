import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text,Button, Form, Item, 
  Input, Label, Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'
import NewTests from './NewTests.js';


class AddTests extends Component {

  constructor(props) {
    super(props);
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
                  <Text style={dStyles.formTitle}> Prescribe Tests - {`Step ${currentStep} of ${totalSteps}`}</Text>
                </CardItem>
                <CardItem bordered>
                  <NewTests/>
                </CardItem>
                <CardItem bordered style={dStyles.cardItemBodyStyle}>
                  <Form>
                    <View style={dStyles.buttonContainer}>
                      <Item stackedLabel>
                        <Label>Tests</Label>
                        <Input value={this.state.medication} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'tests')} />
                      </Item>
                      <Item stackedLabel>
                        <Label>Description</Label>
                        <Input value={this.state.strength} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'description')} />
                      </Item>
                    </View>
                    <View style={dStyles.buttonContainer}>
                      <Item stackedLabel>
                        <Label>Timing</Label>
                        <Input value={this.state.dosage} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'timing')} />
                      </Item>
                      <Item stackedLabel>
                        <Label>Notes</Label>
                        <Input value={this.state.note} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'note')} />
                      </Item>
                    </View>
                    <View style={dStyles.buttonContainer}>
                        <TouchableOpacity onPress={this.nextStep} >
                          <Thumbnail small source={require('../../images/leftarrow.png')}/>
                        </TouchableOpacity>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('PrescribeTests')}>
                            <Text style={dStyles.buttonText}>Add</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Update</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Delete</Text>
                        </Button>
                        <TouchableOpacity onPress={this.nextStep} >
                          <Thumbnail small source={require('../../images/rightarrow.png')}/>
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

export default AddTests;