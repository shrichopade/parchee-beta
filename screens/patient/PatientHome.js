import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import PatientHeader from './PatientHeader.js';
import PatientFooter from './PatientFooter.js';

export default function PatientHome({ navigation }) {
    return (
        <Container>
            <PatientHeader />
            <Content>
                <Icon name='home' />
                <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                <Icon type="FontAwesome" name="home" />
            </Content>
            <PatientFooter />
      </Container>
    );
}