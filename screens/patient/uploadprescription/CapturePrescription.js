import React, { Component, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { Thumbnail } from 'native-base';

import AppTextInput from '../../components/AppTextInput';

import { styles } from '../../styles/defaultStyles.js'

class CapturePrescription extends Component {

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
            <AppTextInput
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  leftIcon="text"
                  placeholder="Upload Document"
                  keyboardType="default"
            />
            <AppTextInput
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  leftIcon="sim"
                  placeholder="Upload from PhotoLibrary"
                  keyboardType="default"
            />
            <AppTextInput
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  leftIcon="camera"
                  placeholder="Take Picture from Camera"
                  keyboardType="default"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.nextStep} >
                <Thumbnail small source={require('../../images/rightarrow.jfif')}/>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default CapturePrescription;