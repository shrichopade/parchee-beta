import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('PatientHome')}>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small square source={require('../images/home.png')}/> }
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('MyReminders')}>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small square source={require('../images/alarm.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small square source={require('../images/qrcode.png')}/> }
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('MyOffers')}>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small square source={require('../images/offers.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small source={require('../images/profile.jpg')}/> }
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}