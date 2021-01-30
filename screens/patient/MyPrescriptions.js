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
                    <Text style={dStyles.pageSubTitle}>My Prescriptions</Text>
                    <DataTable>
                        <DataTable.Header style={styles.tableHeaderBgColor}>
                            <DataTable.Title sortDirection='ascending'>Date</DataTable.Title>
                            <DataTable.Title>Doctor</DataTable.Title>
                            <DataTable.Title>Type</DataTable.Title>
                            <DataTable.Title>Chemist</DataTable.Title>
                            <DataTable.Title>Status</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PatientHome')}>
                                    <Text style={dStyles.linkText}>11/01/2021</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell>Dr P Kulkarni</DataTable.Cell>
                            <DataTable.Cell>One time</DataTable.Cell> 
                            <DataTable.Cell>Laxmi Medicals, Pune</DataTable.Cell>                      
                            <DataTable.Cell>Active</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PatientHome')}>
                                    <Text style={dStyles.linkText}>24/06/2020</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell>Dr P Kulkarni</DataTable.Cell>
                            <DataTable.Cell>Recurring</DataTable.Cell> 
                            <DataTable.Cell>Laxmi Medicals, Pune</DataTable.Cell>                      
                            <DataTable.Cell>Active</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PatientHome')}>
                                    <Text style={dStyles.linkText}>25/11/2019</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell>Dr R Joshi</DataTable.Cell>
                            <DataTable.Cell>One time</DataTable.Cell> 
                            <DataTable.Cell>Suresh Medicals, Pune</DataTable.Cell>                      
                            <DataTable.Cell>Stopped</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PatientHome')}>
                                    <Text style={dStyles.linkText}>11/04/2018</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell>Dr R Joshi</DataTable.Cell>
                            <DataTable.Cell>Recurring</DataTable.Cell> 
                            <DataTable.Cell>Suresh Medicals, Pune</DataTable.Cell>                      
                            <DataTable.Cell>Stopped</DataTable.Cell>                        
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