import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Icon, Button } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import PatientHeader from './PatientHeader.js';
import PatientFooter from './PatientFooter.js';
import ActivePrescription from './ActivePrescription.js';
import ActiveOrders from './ActiveOrders.js';
import AdvtBanner from './AdvtBanner.js';

export default function PatientHome({ navigation }) {
    return (
        <Container>
            <PatientHeader />
            <Content>
                <Text style={styles.pageTitle2}>My Prescription</Text>
                <ActivePrescription />
                <View style={styles.buttonContainer}>
                    <Button iconLeft>
                        <Icon name='eye' />
                        <Text>&nbsp;&nbsp;Upload Prescription&nbsp;&nbsp;</Text>
                    </Button>
                    <Button iconLeft>
                        <Icon name='person' />
                        <Text>&nbsp;&nbsp;Send to Chemist&nbsp;&nbsp;</Text>
                    </Button>
                </View>
                <Text style={styles.pageTitle2}>My Orders</Text>
                <ActiveOrders />
            </Content>
            <AdvtBanner />
            <PatientFooter />
      </Container>
    );
}