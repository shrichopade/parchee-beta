import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

export default class ConfirmSignUp extends Component {
  constructor() {
    super();
    this.state = {
      passcode: '',
      password: '',
      confirmPassword: ''
    }
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  render() {
    return (
      <Container style={dStyles.container}>
        <Content>
          <Card style={dStyles.cardStyle}>
            <CardItem header bordered>
              <Text style={dStyles.formTitle}> Reset Password </Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
              <Form>
                <Item stackedLabel>
                  <Label>Passcode</Label>
                  <Input value={this.state.passcode} 
                    keyboardType="phone-pad"
                    textContentType="numeric"
                    onChangeText={(val) => this.inputValueUpdate(val, 'passcode')} />
                </Item>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input value={this.state.password}  secureTextEntry
                    onChangeText={(val) => this.inputValueUpdate(val, 'password')}  />
                </Item>
                <Item stackedLabel>
                  <Label>Confirm Password</Label>
                  <Input value={this.state.confirmPassword}  secureTextEntry
                    onChangeText={(val) => this.inputValueUpdate(val, 'confirmPassword')}  />
                </Item>
                <Button success style={dStyles.buttonStyle} onPress={() => this.props.navigation.navigate('SignIn')}>
                  <Text style={dStyles.buttonText}>Confirm</Text>
                </Button>
              </Form>
            </CardItem>
            <CardItem footer bordered>
              <Text style={dStyles.footerText}>Copyright Parchee, all rights reserved</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>  
    );
  }
};