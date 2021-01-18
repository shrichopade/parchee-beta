import React, { Component, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity} from "react-native";
import { Content, ListItem, CheckBox, Body, Text, Thumbnail } from 'native-base';

import { styles } from '../../styles/defaultStyles.js'

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
                <ListItem>
                    <CheckBox checked={false}  color="green"/>
                    <Body>
                        <Text style={styles.textLabelNormal}>Amoxcyline</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false}  color="green"/>
                    <Body>
                        <Text style={styles.textLabelNormal}>Amoldipine</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} color="green"/>
                    <Body>
                        <Text style={styles.textLabelNormal}>Novolin Insulin</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} color="green"/>
                    <Body>
                        <Text style={styles.textLabelNormal}>Insulin Syringes</Text>
                    </Body>
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

export default SelectMedicine;