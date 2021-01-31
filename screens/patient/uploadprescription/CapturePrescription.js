import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Form, Item, 
  Input, Label, Card, CardItem, Thumbnail } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import rightarrow from '../../../assets/app_assets/rightarrow.png';

import { dStyles } from '../../styles/DefaultStyleSheet.js'
import { styles } from '../../styles/defaultStyles.js'

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
                      <View style={dStyles.buttonContainer}>
                        <Input value={this.state.uploadDoc} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'uploadDoc')} />
                        <MaterialCommunityIcons
                          name={"google-drive"}
                          size={20}
                          color="#6e6869"
                          style={styles.icon}
                        />
                        <MaterialCommunityIcons
                          name={"apple-icloud"}
                          size={20}
                          color="#6e6869"
                          style={styles.icon}
                        />
                      </View>
                    </Item>
                    <Item stackedLabel>
                      <Label>Upload Photo</Label>
                      <View style={dStyles.buttonContainer}>
                        <Input value={this.state.uploadPic} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'uploadPic')} />
                        <MaterialCommunityIcons
                          name={"google-photos"}
                          size={20}
                          color="#6e6869"
                          style={styles.icon}
                        />
                      </View>
                    </Item>
                    <Item stackedLabel>
                      <Label>Take Picture</Label>
                      <View style={dStyles.buttonContainer}>
                        <Input value={this.state.takePhoto} 
                          onChangeText={(val) => this.inputValueUpdate(val, 'takePhoto')} />
                        <MaterialCommunityIcons
                          name={"camera"}
                          size={20}
                          color="#6e6869"
                          style={styles.icon}
                        />
                      </View>
                    </Item>
                    <View style={dStyles.buttonContainer}>
                      <TouchableOpacity onPress={this.nextStep} >
                        {/* <Thumbnail small source={rightarrow}/>  */}
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

export default CapturePrescription;