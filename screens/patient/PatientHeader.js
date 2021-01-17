import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical>
              <Icon name="alarm" /> 
              <Text style={headerStyles.headerMenu}>My Alerts</Text>
            </Button>
            <Button vertical>
              <Icon active name="keypad" />
              <Text style={headerStyles.headerMenu}>My Notes</Text>
            </Button>
            <Button vertical>
              <Icon name="film" />
              <Text style={headerStyles.headerMenu}>QR Code</Text>
            </Button>
            <Button vertical>
              <Icon name="medkit" />
              <Text style={headerStyles.headerMenu}>My Offers</Text>
            </Button>
            <Button vertical>
              <Thumbnail small source={require('../images/profile.jpg')}/>
              <Text style={headerStyles.headerMenu}>Mrs Shinde</Text>
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}