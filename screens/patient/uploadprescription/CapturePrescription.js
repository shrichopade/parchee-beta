import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Form, Item, 
  Input, Label, Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'

class CapturePrescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      uploadDoc: '',
      uploadPic: '',
      takePhoto: ''
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
                  <Text style={dStyles.formTitle}> Capture Prescription - {`Step ${currentStep} of ${totalSteps}`}</Text>
                </CardItem>
                <CardItem bordered style={dStyles.cardItemBodyStyle}>
                  <Form>
                    <Item stackedLabel>
                      <Label>Upload Document</Label>
                      <Input value={this.state.uploadDoc} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'uploadDoc')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Upload Photo</Label>
                      <Input value={this.state.uploadPic} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'uploadPic')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Take Picture</Label>
                      <Input value={this.state.takePhoto} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'takePhoto')} />
                    </Item>
                    <View style={dStyles.buttonContainer}>
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

export default CapturePrescription;