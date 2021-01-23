import React, { Component } from 'react';
import { Container, Text, Content, Button } from 'native-base';
import { View } from 'react-native';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import ChemistFooter from './ChemistFooter';
import OrdersList from './OrdersList';

export default class ChemistHome extends Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Container>
                <OrdersList navigation={this.props.navigation} orderStatus='Open'/>
                <Content>
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('OrdersList', {orderStatus:'Dispatched'})}>
                            <Text style={dStyles.buttonText}>Dispatched Orders</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('OrdersList', {orderStatus:'Closed'})}>
                            <Text style={dStyles.buttonText}>Closed Orders</Text>
                        </Button>
                    </View>
                </Content>
                <ChemistFooter />
        </Container>
        );
    }
}