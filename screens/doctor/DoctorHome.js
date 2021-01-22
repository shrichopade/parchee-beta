import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'

import DoctorHeader from './DoctorHeader.js';
import DoctorFooter from './DoctorFooter.js';

export default class DoctorHome extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <DoctorHeader />
                <Content>
                    <Text style={dStyles.pageSubTitle}>Doctor Home Page</Text>
                </Content>
                <DoctorFooter />
        </Container>
        );
    }
}