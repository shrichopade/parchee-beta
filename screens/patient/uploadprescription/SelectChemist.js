import React, { Component, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity} from "react-native";
import { Content, ListItem, Radio, Left, Right, Text, Button, Icon } from 'native-base';

import { styles } from '../../styles/defaultStyles.js'
import PatientHome from '../PatientHome.js';

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
                        <Text style={styles.textLabelNormal}>Mahalaxmi Medicals, Kothrud, Pune</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={true}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={styles.textLabelNormal}>Surendra Medical, Kothrud, Pune</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
                <ListItem selected={false} >
                    <Left>
                        <Text style={styles.textLabelNormal}>Krishna Medicals, Kothrud, Pune</Text>
                    </Left>
                    <Right>
                        <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false}
                     />
                    </Right>
                </ListItem>
            </Content>
            <View style={styles.container}>
                <Button iconLeft style={styles.buttonStyle}  onPress={PatientHome}>
                    <Icon name='medkit' />
                    <Text style={styles.buttonText}>&nbsp;&nbsp;Send to Chemist&nbsp;&nbsp;</Text>
                </Button>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SelectChemist;