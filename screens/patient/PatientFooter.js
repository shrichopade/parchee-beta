import React, { Component } from 'react';
import { Container, Header, Thumbnail, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

export default class PatientFooter extends Component {
  render() {
    return (
        <Footer style={footerStyles.footerBgColor}>
          <FooterTab>
            <Button vertical>
              {<Thumbnail style={footerStyles.headerFooterIcon} 
                small square source={require('../images/myprescriptions.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail style={footerStyles.headerFooterIcon} 
                small square source={require('../images/myappointments.png')}/> }
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('ViewAgency')}>
              {<Thumbnail style={footerStyles.headerFooterIcon} 
                small square source={require('../images/myagency.png')}/> }
            </Button>
            <Button vertical>
              {<Thumbnail style={footerStyles.headerFooterIcon} 
                small square source={require('../images/myorders.png')}/> }
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('SignIn')}>
              {<Thumbnail style={footerStyles.headerFooterIcon} 
                small square source={require('../images/signout.png')}/> }
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}