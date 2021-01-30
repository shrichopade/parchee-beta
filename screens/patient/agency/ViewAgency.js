import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Container, Content, Button, Text } from 'native-base';

import { styles } from '../../styles/defaultStyles.js'
import { dStyles } from '../../styles/DefaultStyleSheet.js'

import PatientHeader from '../PatientHeader';
import PatientFooter from '../PatientFooter';

export default class ViewAgency extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>View My Agencies</Text>
                    <DataTable>
                        <DataTable.Header style={styles.tableHeaderBgColor}>
                            <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Agency Id</DataTable.Title>
                            <DataTable.Title>Type</DataTable.Title>
                            <DataTable.Title>Name and Address</DataTable.Title>
                            <DataTable.Title>Contact Number</DataTable.Title>
                            <DataTable.Title>Delete</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAgencyDetails')}>
                                    <Text style={dStyles.linkText}>A001</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.tableCellText}>Doctor</DataTable.Cell>
                            <DataTable.Cell>Mr Prakash Datar, Kothrud, Pune</DataTable.Cell> 
                            <DataTable.Cell>9887654324</DataTable.Cell>                      
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeleteAgency')}>
                                    <Text style={dStyles.linkText}>Delete</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>                        
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAgencyDetails')}>
                                    <Text style={dStyles.linkText}>A002</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.tableCellText}>Chemist</DataTable.Cell>
                            <DataTable.Cell>Mahalaxmi Medicals, Kothrud, Pune</DataTable.Cell>    
                            <DataTable.Cell>9887276394</DataTable.Cell>                   
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeleteAgency')}>
                                    <Text style={dStyles.linkText}>Delete</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>               
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAgencyDetails')}>
                                    <Text style={dStyles.linkText}>A003</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.tableCellText}>Chemist</DataTable.Cell>
                            <DataTable.Cell>Suresh Pharmacy, Deccan, Pune</DataTable.Cell>  
                            <DataTable.Cell>9889735423</DataTable.Cell>                      
                            <DataTable.Cell>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeleteAgency')}>
                                    <Text style={dStyles.linkText}>Delete</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>               
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
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('AddAgency')}>
                            <Text style={dStyles.buttonText}>Add Agency</Text>
                        </Button>
                    </View>
                </Content>
                <PatientFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}