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
            </Button>
            <Button vertical>
              <Icon name="keypad" />
            </Button>
            <Button vertical>
              <Icon name="film" />
            </Button>
            <Button vertical>
              <Icon name="medkit" />
            </Button>
            <Button vertical>
              {<Thumbnail small source={require('../images/profile.jpg')}/> }
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}