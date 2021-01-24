import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Form, Item, Input, 
    Label, Card, CardItem, Button, DatePicker, ListItem, Picker, Icon,
    Left, Right, Radio, Body, CheckBox } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'
import PatientHeader from '../PatientHeader';
import PatientFooter from '../PatientFooter';

export default class EditAgency extends Component {
    constructor() {
        super();
        this.state = {
            selected2: undefined
        };
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

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    render() {
        return (
            <Container style={dStyles.container}>
                <PatientHeader />
                <Content>
                    <Card style={dStyles.cardStyle}>
                        <CardItem header bordered>
                            <Text style={dStyles.formTitle}> Edit Agency Details </Text>
                        </CardItem>
                        <CardItem bordered style={dStyles.cardItemBodyStyle}>
                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select Agency"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Doctor" value="key0" />
                                        <Picker.Item label="Chemist" value="key1" />
                                        <Picker.Item label="Laboratory" value="key2" />
                                    </Picker>
                                </Item>
                                <Item stackedLabel>
                                    <Label>Given name(s)</Label>
                                    <Input value={this.state.givenNames} 
                                        autoCapitalize="words"
                                        keyboardType="default"
                                        onChangeText={(val) => this.inputValueUpdate(val, 'givenNames')} />
                                </Item>
                                <View style={dStyles.buttonContainer}>
                                    <Button success style={dStyles.buttonStyle} 
                                        onPress={() => this.props.navigation.navigate('ViewAgency')}>
                                        <Text style={dStyles.buttonText}>Cancel</Text>
                                    </Button>
                                    <Button success style={dStyles.buttonStyle} 
                                        onPress={() => this.props.navigation.navigate('ViewAgency')}>
                                        <Text style={dStyles.buttonText}>Submit</Text>
                                    </Button>
                                </View>
                            </Form>
                        </CardItem>
                    </Card>
                </Content>
                <PatientFooter />
          </Container>    
        );
    }
};

