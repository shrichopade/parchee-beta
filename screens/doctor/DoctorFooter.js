import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

export default class DoctorFooter extends Component {
  render() {
    return (
        <Footer style={footerStyles.footerBgColor}>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
            </Button>
            <Button vertical>
              <Icon name="menu" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}