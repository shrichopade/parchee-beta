import React, { Component } from 'react';
import { Container, Text, Content, Button } from 'native-base';
import { View } from 'react-native';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import ChemistFooter from './ChemistFooter';
import OrdersList from './OrdersList';
import ChemistHeader from './ChemistHeader';

export default class ChemistHome extends Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Container>
                <ChemistHeader navigation={this.props.navigation}/>
                <OrdersList navigation={this.props.navigation} orderStatus={this.props.route.params.orderStatus}/>
                <Content>
                    <View style={dStyles.buttonContainer}>
                        <Button success style={dStyles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('ChemistHome', 
                                {orderStatus: this.props.route.params.orderStatus === 'Open' ? 'Dispatched' : 'Open'})}>
                            <Text style={dStyles.buttonText}>{ this.props.route.params.orderStatus === 'Open' ? 'Dispatched' : 'Open'} Orders</Text>
                        </Button>
                        <Button success style={dStyles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ChemistHome',     
                                {orderStatus:'Closed'})}>
                            <Text style={dStyles.buttonText}>Closed Orders</Text>
                        </Button>
                    </View>
                </Content>
                <ChemistFooter />
        </Container>
        );
    }
}