import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Icon, Button } from 'native-base';

import { styles } from '../styles/defaultStyles.js'

import DoctorHeader from './DoctorHeader.js';
import DoctorFooter from './DoctorFooter.js';

export default function DoctorHome({ navigation }) {

    return (
        <Container>
            <DoctorHeader />
            <Content>
                <Text style={styles.pageTitle2}>Doctor Home Page</Text>
            </Content>
            <DoctorFooter />
      </Container>
    );
}