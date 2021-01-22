import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

export default class ResetPasswd extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  validateInput() {
    if(this.state.username === '') {
      alert('User name is mandatory')
    }
  }

  render() {
    return (
      <Container style={dStyles.container}>
        <Content>
          <Card style={dStyles.cardStyle}>
            <CardItem header bordered>
              <Text style={dStyles.formTitle}> Request OTP </Text>
            </CardItem>
            <CardItem bordered>
              <Form>
                <Item stackedLabel>
                  <Label>Username (Email)</Label>
                  <Input value={this.state.username} 
                    onChangeText={(val) => this.inputValueUpdate(val, 'username')} />
                </Item>
                <Button success style={dStyles.buttonStyle} onPress={() => this.props.navigation.navigate('ConfirmSignUp')}>
                  <Text style={dStyles.buttonText}>Send Code</Text>
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