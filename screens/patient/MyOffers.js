import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Container, Content, Button, Text } from 'native-base';

import { styles } from '../styles/defaultStyles.js'
import { dStyles } from '../styles/DefaultStyleSheet.js'

import PatientHeader from './PatientHeader';
import PatientFooter from './PatientFooter';

export default class MyOffers extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>My Offers</Text>
                    <DataTable>
                        <DataTable.Header style={styles.tableHeaderBgColor}>
                            <DataTable.Title sortDirection='ascending'>Start Date</DataTable.Title>
                            <DataTable.Title>Provider</DataTable.Title>
                            <DataTable.Title>Offer details</DataTable.Title>
                            <DataTable.Title>Claim code</DataTable.Title>
                            <DataTable.Title>Valid until</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>15/02/2021</DataTable.Cell>
                            <DataTable.Cell>Deccan Gymkhana</DataTable.Cell>
                            <DataTable.Cell>20% off per month</DataTable.Cell> 
                            <DataTable.Cell>234543</DataTable.Cell>                      
                            <DataTable.Cell>28/02/2021</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>05/02/2021</DataTable.Cell>
                            <DataTable.Cell>Suresh Medicals, Pune</DataTable.Cell>
                            <DataTable.Cell>Rs 20 off on Rs 500 purchase</DataTable.Cell> 
                            <DataTable.Cell>765433</DataTable.Cell>                      
                            <DataTable.Cell>28/02/2021</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>15/01/2021</DataTable.Cell>
                            <DataTable.Cell>Surya Hospitals</DataTable.Cell>
                            <DataTable.Cell>Free Blood test</DataTable.Cell> 
                            <DataTable.Cell>Not required</DataTable.Cell>                      
                            <DataTable.Cell>31/01/2021</DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>05/11/2020</DataTable.Cell>
                            <DataTable.Cell>Rajesh Opticals</DataTable.Cell>
                            <DataTable.Cell>Free eye test</DataTable.Cell> 
                            <DataTable.Cell>345678</DataTable.Cell>                      
                            <DataTable.Cell>31/12/2020</DataTable.Cell>                        
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