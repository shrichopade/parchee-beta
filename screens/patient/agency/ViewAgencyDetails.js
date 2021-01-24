import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text, Card, CardItem, ListItem } from 'native-base';

import { styles } from '../../styles/defaultStyles.js'
import { dStyles } from '../../styles/DefaultStyleSheet.js'

import PatientHeader from '../PatientHeader';
import PatientFooter from '../PatientFooter';

export default class ViewAgencyDetails extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <PatientHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>View Agency Details - Agency Id A002 (Chemist)</Text>
                    <Card style={dStyles.cardStyle}>
                        <CardItem bordered>
                            <ListItem>
                                <Text style={styles.tableHeaderText}>Name : Mahalaxmi Medicals</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.tableHeaderText}>Owner : Mr Ramesh Kohli</Text>
                            </ListItem>
                        </CardItem>
                        <CardItem>
                            <ListItem>
                                <Text style={styles.tableHeaderText}>Address : Kothrud Pune</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.tableHeaderText}>Active since : 12/07/2020</Text>
                            </ListItem>
                        </CardItem>
                    </Card>
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('ViewAgency')}>
                            <Text style={dStyles.buttonText}>Back</Text>
                        </Button>
                    </View>
                </Content>
                <PatientFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}