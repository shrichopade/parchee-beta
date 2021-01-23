import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Form, ListItem, CheckBox, Body, 
  Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'

class SelectMedicine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: ""
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
              <Text style={dStyles.formTitle}> Select Medicine - {`Step ${currentStep} of ${totalSteps}`}</Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
              <Form>
                <ListItem>
                    <CheckBox checked={false}  color="green"/>
                    <Body>
                        <Text style={dStyles.textLabelNormal}>Amoxcyline</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false}  color="green"/>
                    <Body>
                        <Text style={dStyles.textLabelNormal}>Amoldipine</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} color="green"/>
                    <Body>
                        <Text style={dStyles.textLabelNormal}>Novolin Insulin</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} color="green"/>
                    <Body>
                        <Text style={dStyles.textLabelNormal}>Insulin Syringes</Text>
                    </Body>
                </ListItem>
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

export default SelectMedicine;