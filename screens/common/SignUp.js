import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Text, Form, Item, Input, Label, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            givenNames: '',
            surname: ''
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
                                <Button success style={dStyles.buttonStyle} onPress={() => this.props.navigation.navigate('SignIn')}>
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

