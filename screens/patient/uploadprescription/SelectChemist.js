import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Text, Form, Radio, ListItem,
  Left, Right, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'

class SelectChemist extends Component {

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

  sendParcheeToChemist = () => {
        try {
            navigation.navigate('PatientHome')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack = () =>  {
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
              <Text style={dStyles.formTitle}> Select Chemist - {`Step ${currentStep} of ${totalSteps}`}</Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
              <Form>
                  <ListItem selected={true} >
                      <Left>
                          <Text style={dStyles.textLabelNormal}>Mahalaxmi Medicals, Kothrud, Pune</Text>
                      </Left>
                      <Right>
                          <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={true}
                      />
                      </Right>
                  </ListItem>
                  <ListItem selected={false} >
                      <Left>
                          <Text style={dStyles.textLabelNormal}>Surendra Medical, Kothrud, Pune</Text>
                      </Left>
                      <Right>
                          <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                      />
                      </Right>
                  </ListItem>
                  <ListItem selected={false} >
                      <Left>
                          <Text style={dStyles.textLabelNormal}>Krishna Medicals, Kothrud, Pune</Text>
                      </Left>
                      <Right>
                          <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                      />
                      </Right>
                  </ListItem>
                  <View style={dStyles.container}>
                    <Button iconLeft style={dStyles.buttonStyle}  onPress={() => this.props.navigation.navigate('PatientHome')}>
                        <Text style={dStyles.buttonText}>&nbsp;&nbsp;Send to Chemist&nbsp;&nbsp;</Text>
                    </Button>
                  </View>
              </Form>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SelectChemist;