import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import ChemistHeader from './ChemistHeader.js';
import ChemistFooter from './ChemistFooter.js';

export default class ChemistHome extends Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Container>
                <ChemistHeader navigation={this.props.navigation}/>
                <Content>
                    <Text style={dStyles.pageSubTitle}>Chemist Home Page</Text>
                </Content>
                <ChemistFooter />
        </Container>
        );
    }
}