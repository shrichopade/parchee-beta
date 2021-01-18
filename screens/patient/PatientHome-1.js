import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Button, Tab, Tabs, ScrollableTab } from 'native-base';

import { styles } from '../styles/defaultStyles.js'

import PatientHeader from './PatientHeader.js';
import PatientFooter from './PatientFooter.js';
import ActiveOrders from './ActiveOrders.js';
import AdvtBanner from './AdvtBanner.js';

export default function PatientHome({ navigation }) {
    return (
        <Container>
            <PatientHeader />
            <Content>
                <Text style={styles.pageTitle2}>My Prescription</Text>
                
                <Tabs renderTabBar={()=> <ScrollableTab />}  style={styles.buttonStyle}>
                    <Tab heading="Tab1" style={styles.buttonText}>
                        <Text>This is the text in the tab 1.</Text>
                    </Tab>
                    <Tab heading="Tab2" style={styles.buttonText}>
                        <Text>Tab 2</Text>
                    </Tab>
                    <Tab heading="Tab3" style={styles.buttonText}>
                        <Text>Tab 3</Text>
                    </Tab>
                </Tabs>                    
                <View style={styles.buttonContainer}>
                    <Button iconLeft style={styles.buttonStyle}>
                        <Icon name='eye' />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Upload Prescription&nbsp;&nbsp;</Text>
                    </Button>
                    <Button iconLeft style={styles.buttonStyle}>
                        <Icon name='person' />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Send to Chemist&nbsp;&nbsp;</Text>
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