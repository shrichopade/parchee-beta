import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical>
              {<Thumbnail small square source={require('../images/alarm.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail small square source={require('../images/notes.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail small square source={require('../images/qrcode.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail small square source={require('../images/offers.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail small source={require('../images/profile.jpg')}/> }
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}