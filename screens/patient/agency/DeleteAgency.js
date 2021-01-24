import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

import { dStyles } from '../../styles/DefaultStyleSheet.js'

import PatientHeader from '../PatientHeader';
import PatientFooter from '../PatientFooter';

export default class DeleteAgency extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>Delete Agency</Text>
                    <Text style={dStyles.generalText}>Are you sure you want to delete Suresh Pharmacy, Deccan, Pune?</Text>
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('ViewAgency')}>
                            <Text style={dStyles.buttonText}>Cancel</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('ViewAgency')}>
                            <Text style={dStyles.buttonText}>Delete</Text>
                        </Button>
                    </View>
                </Content>
                <PatientFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}