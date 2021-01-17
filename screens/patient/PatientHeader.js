import React, { Component } from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical>
              <Icon name="alarm" /> 
              <Text style={headerStyles.headerMenu}>Reminders</Text>
            </Button>
            <Button vertical>
              <Icon active name="keypad" />
              <Text style={headerStyles.headerMenu}>Notes</Text>
            </Button>
            <Button vertical>
              <Icon name="film" />
              <Text style={headerStyles.headerMenu}>QR Code</Text>
            </Button>
            <Button vertical>
              <Icon name="medkit" />
              <Text style={headerStyles.headerMenu}>Special Offers</Text>
            </Button>
            <Button vertical>
            <Icon name="person" />
              <Image style={{width: '100%', height: '100%'}} 
                source={{uri: '../images/profile.jpg'}} resizeMode={'cover'} />
              <Text style={headerStyles.headerMenu}>Profile</Text>
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}