import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Icon, Button } from 'native-base';

import { styles } from '../styles/defaultStyles.js'

import PatientHeader from './PatientHeader.js';
import PatientFooter from './PatientFooter.js';
import ActivePrescription from './ActivePrescription.js';

export default function PatientHome({ navigation }) {

    async function uploadPrescription() {
        try {
            navigation.navigate('UploadPrescription')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    return (
        <Container>
            <PatientHeader />
            <Content>
                <Text style={styles.pageTitle2}>My Prescription</Text>
                <ActivePrescription />
                <View style={styles.buttonContainer}>
                    <Button iconLeft style={styles.buttonStyle} onPress={uploadPrescription}>
                        <Icon name='eye' />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Upload Prescription&nbsp;&nbsp;</Text>
                    </Button>
                    <Button iconLeft style={styles.buttonStyle}>
                        <Icon name='person' />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Send to Chemist&nbsp;&nbsp;</Text>
                    </Button>
                </View>
            </Content>
            <PatientFooter />
      </Container>
    );
}