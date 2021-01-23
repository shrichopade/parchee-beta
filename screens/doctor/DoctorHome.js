import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import DoctorHeader from './DoctorHeader.js';
import DoctorFooter from './DoctorFooter.js';
import LastTenPatients from './LastTenPatients.js';

export default class DoctorHome extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <DoctorHeader />
                <Content>
                    <Text style={dStyles.pageSubTitle}>My Patient Visits</Text>
                    <LastTenPatients/>
                    <View style={dStyles.buttonContainer}>
                    <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('PrescribeMedication')}>
                            <Text style={dStyles.buttonText}>Prescribe Medication</Text>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Prescribe Tests</Text>
                        </Button>
                    </View>
                </Content>
                <DoctorFooter />
        </Container>
        );
    }
}