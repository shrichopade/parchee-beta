import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical>
              <Thumbnail small squre source={require('../images/bell.svg')}/> 
            </Button>
            <Button vertical>
            <Thumbnail small square source={require('../images/note2.svg')}/>
            </Button>
            <Button vertical>
              <Thumbnail small square source={require('../images/QR_code.svg')}/>
            </Button>
            <Button vertical>
              <Icon name="medkit" />
            </Button>
            <Button vertical>
              <Thumbnail small source={require('../images/profile.jpg')}/>
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}