import React, { Component } from 'react';
import { Container, Text, Content, Button } from 'native-base';
import { View } from 'react-native';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import ChemistHeader from './ChemistHeader';
import ChemistFooter from './ChemistFooter';
import OpenOrders from './OpenOrders';

export default class ChemistHome extends Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Container>
                <ChemistHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>My Open Orders</Text>
                    <OpenOrders navigation={this.props.navigation} />
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('UploadPrescription')}>
                            <Text style={dStyles.buttonText}>Dispatched Orders</Text>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button success style={dStyles.buttonStyle}>
                            <Text style={dStyles.buttonText}>Closed Orders</Text>
                        </Button>
                    </View>
                </Content>
                <ChemistFooter />
        </Container>
        );
    }
}