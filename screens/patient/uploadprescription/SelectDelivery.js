import React, { Component, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity} from "react-native";
import { Content, ListItem, Radio, Left, Right, Text, Thumbnail } from 'native-base';

import { styles } from '../../styles/defaultStyles.js'

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

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <View>
              <Text style={styles.pageTitle2}>{`Step ${currentStep} of ${totalSteps}`}</Text>
            </View>
            
            <Content>
                <ListItem selected={true} >
                    <Left>
                        <Text style={styles.textLabelNormal}>One week</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={true}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={styles.textLabelNormal}>Two week</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={styles.textLabelNormal}>Four week (Monthly)</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={styles.textLabelNormal}>Auto-repeat Monthly</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
            </Content>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.goBack} >
                <Thumbnail small source={require('../../images/leftarrow.jfif')}/>
              </TouchableOpacity>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TouchableOpacity onPress={this.nextStep} >
                <Thumbnail small source={require('../../images/rightarrow.jfif')}/>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SelectDelivery;