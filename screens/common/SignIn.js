import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Text, Form, Item, Input, Label, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

export default class SignIn extends Component {

    constructor() {
      super();
      this.state = {
        username: '',
        password: ''
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
      if(this.state.password === '') {
        alert('Password is mandatory')
      }
    }

    signIn = () => {
        try {
            if(this.state.username == "P" || this.state.username == "p" ) {
              this.props.navigation.navigate('PatientHome')
            } else if(this.state.username == "D" || this.state.username == "d" ) {
              this.props.navigation.navigate('DoctorHome')
            } else if(this.state.username == "C" || this.state.username == "c" ) {
              this.props.navigation.navigate('ChemistHome')
            } else {
              this.props.navigation.navigate('PatientHome')
            }
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    render() {
      return (
          <Container style={dStyles.container}>
            <Content>
              <Text style={dStyles.pageTitle}>Welcome to Parchee App</Text>
              <Text style={dStyles.pageSubTitle}>Your Medical Assistant</Text>
              <Card style={dStyles.cardStyle}>
                <CardItem header bordered>
                  <Text style={dStyles.formTitle}> Sign In </Text>
                </CardItem>
                <CardItem bordered>
                  <Form>
                    <Item stackedLabel>
                      <Label>Username (Email)</Label>
                      <Input value={this.state.username} 
                        onChangeText={(val) => this.inputValueUpdate(val, 'username')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Password</Label>
                      <Input value={this.state.password}  secureTextEntry
                        onChangeText={(val) => this.inputValueUpdate(val, 'password')}  />
                    </Item>
                      <Button success style={dStyles.buttonStyle} onPress={() => this.signIn()}>
                        <Text style={dStyles.buttonText}>Login</Text>
                      </Button>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetPasswd')}>
                        <Text style={dStyles.linkText}>Forgot Password? Reset Password</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={dStyles.linkText}>Don't have an account? Sign Up</Text>
                      </TouchableOpacity>
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