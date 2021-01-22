import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Text, Form, Item, Input, 
    Label, Card, CardItem, Button, DatePicker, ListItem, 
    Left, Right, Radio, Body, CheckBox } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = { dateOfBirth: new Date() };
        this.setDate = this.setDateOfBirth.bind(this);
        this.state = {
            givenNames: '',
            surname: '',
            mobileNumber: '',
            username: '',
            password: '',
            aadharCard: '',
            registrationNumber: ''
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    setDateOfBirth = (newDate) => {
        this.setState({ dateOfBirth: newDate });
    }

    render() {
        return (
            <Container style={dStyles.container}>
                <Content>
                    <Card style={dStyles.cardStyle}>
                        <CardItem header bordered>
                            <Text style={dStyles.formTitle}> Sign Up </Text>
                        </CardItem>
                        <CardItem bordered style={dStyles.cardItemBodyStyle}>
                            <Form>
                                <Item stackedLabel>
                                    <Label>Given name(s)</Label>
                                    <Input value={this.state.givenNames} 
                                        autoCapitalize="words"
                                        keyboardType="default"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'givenNames')} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Surname</Label>
                                    <Input value={this.state.surname}  
                                        autoCapitalize="words"
                                        keyboardType="default"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'surname')}  />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Date of Birth</Label>
                                    <DatePicker
                                        minimumDate={new Date(1925, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Select date"
                                        placeHolderTextStyle={{ color: "#d6d6d6" }}
                                        onDateChange={this.setDateOfBirth}
                                        disabled={false}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Mobile Number</Label>
                                    <Input value={this.state.mobileNumber}  
                                        keyboardType="phone-pad"
                                        textContentType="numeric"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'mobileNumber')}  />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Username (Email Address)</Label>
                                    <Input value={this.state.username} 
                                        keyboardType="email-address"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'username')} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Password</Label>
                                    <Input value={this.state.password}  secureTextEntry
                                        onChangeText={(val) => this.inputValueUpdate(val, 'password')}  />
                                </Item>
                                <Item stackedLabel style={dStyles.buttonContainer}>
                                    <Label>Your status</Label>
                                    <ListItem>
                                        <Left><Radio selected={true}/></Left>
                                        <Right><Text style={dStyles.labelText}>Patient</Text></Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left><Radio selected={false}/></Left>
                                        <Right><Text style={dStyles.labelText}>Doctor</Text></Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left><Radio selected={false}/></Left>
                                        <Right><Text style={dStyles.labelText}>Chemist</Text></Right>
                                    </ListItem>
                                </Item>
                                <Item stackedLabel>
                                    <Label>Aadhar Card  Number</Label>
                                    <Input value={this.state.aadharCard}  
                                        keyboardType="phone-pad"
                                        textContentType="numeric"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'aadharCard')}  />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Registration Number</Label>
                                    <Input value={this.state.registrationNumber}  
                                        keyboardType="phone-pad"
                                        textContentType="numeric"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'registrationNumber')}  />
                                </Item>
                                <Item stackedLabel style={dStyles.buttonContainer}>
                                    <Label>Marketing Preferences</Label>
                                    <ListItem>
                                        <CheckBox checked={true} />
                                        <Body><Text style={dStyles.labelText}>Phone</Text></Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={true} />
                                        <Body><Text style={dStyles.labelText}>Email</Text></Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={true} />
                                        <Body><Text style={dStyles.labelText}>Post</Text></Body>
                                    </ListItem>
                                </Item>
                                <ListItem>
                                    <CheckBox checked={true} />&nbsp;&nbsp;
                                    <Text style={dStyles.labelText}>I agree to the Terms and Conditions</Text>
                                </ListItem>
                                <Button success style={dStyles.buttonStyle} onPress={() => this.props.navigation.navigate('ConfirmSignUp')}>
                                    <Text style={dStyles.buttonText}>Register</Text>
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

