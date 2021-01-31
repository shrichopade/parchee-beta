import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Form, Radio, ListItem,
  Left, Right, Card, CardItem, Thumbnail } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js';
import leftarrow from '../../images/leftarrow.png';
import rightarrow from '../../images/rightarrow.png';


class SelectDelivery extends Component {

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
              <Text style={dStyles.formTitle}> Select Delivery - {`Step ${currentStep} of ${totalSteps}`}</Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
              <Form>
              <ListItem selected={true} >
                    <Left>
                        <Text style={dStyles.textLabelNormal}>One week</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={true}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={dStyles.textLabelNormal}>Two week</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={dStyles.textLabelNormal}>Four week (Monthly)</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={dStyles.textLabelNormal}>Auto-repeat Monthly</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <View style={dStyles.buttonContainer}>
                  <TouchableOpacity onPress={this.goBack} >
                    <Thumbnail small source={leftarrow}/>
                    {/* <Thumbnail small source={require('../../images/leftarrow.png')}/> */}
                  </TouchableOpacity>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <TouchableOpacity onPress={this.nextStep} >
                    <Thumbnail small source={rightarrow}/>
                    {/* <Thumbnail small source={require('../../images/rightarrow.png')}/> */}
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

export default SelectDelivery;