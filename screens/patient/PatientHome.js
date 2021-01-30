import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import PatientHeader from './PatientHeader';
import PatientFooter from './PatientFooter';
import ActivePrescription from './ActivePrescription';

export default class PatientHome extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content style={dStyles.cardStyle}>
                    <View style={dStyles.welcomeContainer}>
                        <Text style={dStyles.welcomeLeft}>Good Morning Mrs Patwardhan</Text>
                        <Text style={dStyles.welcomeRight}>Date: 15/01/2021</Text>
                    </View>
                    <Text style={dStyles.pageSubTitle}>My Active Prescription</Text>
                    <ActivePrescription navigation={this.props.navigation} />
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('UploadPrescription')}>
                            <Text style={dStyles.buttonText}>Upload Prescription</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('SendToChemist')}>
                            <Text style={dStyles.buttonText}>Send to Chemist</Text>
                        </Button>
                    </View>
                </Content>
                <PatientFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}