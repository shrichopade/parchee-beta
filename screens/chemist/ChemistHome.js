import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Icon, Button } from 'native-base';

import { styles } from '../styles/defaultStyles.js'

import ChemistHeader from './ChemistHeader.js';
import ChemistFooter from './ChemistFooter.js';

export default function ChemistHome({ navigation }) {

    return (
        <Container>
            <ChemistHeader />
            <Content>
                <Text style={styles.pageTitle2}>Chemist Home Page</Text>
            </Content>
            <ChemistFooter />
      </Container>
    );
}