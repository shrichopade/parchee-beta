import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Container, Content, Button, Text } from 'native-base';

import { styles } from '../styles/defaultStyles.js'
import { dStyles } from '../styles/DefaultStyleSheet.js'

import PatientHeader from './PatientHeader';
import PatientFooter from './PatientFooter';

export default class MyPrescriptions extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>My Reminders</Text>
                    <DataTable>
                        <DataTable.Header style={styles.tableHeaderBgColor}>
                            <DataTable.Title>Date Time</DataTable.Title>
                            <DataTable.Title>Meet with</DataTable.Title>
                            <DataTable.Title>Contact No</DataTable.Title>
                            <DataTable.Title>Reason</DataTable.Title>
                            <DataTable.Title>Status</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>15/02/2021 17:00</DataTable.Cell>
                            <DataTable.Cell>Dr P Kulkarni</DataTable.Cell>
                            <DataTable.Cell>9877656567</DataTable.Cell> 
                            <DataTable.Cell>Regular Checkup</DataTable.Cell>                      
                            <DataTable.Cell>Upcoming</DataTable.Cell>                        
                        </DataTable.Row>

                        

                        <DataTable.Pagination
                        page={1}
                        numberOfPages={3}
                        onPageChange={page => {
                            console.log(page);
                        }}
                        label="1-2 of 6"
                        />
                    </DataTable>
                </Content>
                <PatientFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}