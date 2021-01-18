import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

export default class PatientFooter extends Component {
  render() {
    return (
        <Footer style={footerStyles.footerBgColor}>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
            </Button>
            <Button vertical>
              <Icon name="person" /> 
            </Button>
            <Button vertical>
              <Icon active name="grid" />
            </Button>
            <Button vertical>
              <Icon name="menu" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}