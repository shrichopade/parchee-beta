import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

export default class PatientFooter extends Component {
  render() {
    return (
        <Footer style={footerStyles.footerBgColor}>>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text style={footerStyles.footerMenu}>My Appointments</Text>
            </Button>
            <Button vertical>
              <Icon name="person" /> 
              <Text style={footerStyles.footerMenu}>My Doctors/ Chemists</Text>
            </Button>
            <Button vertical>
              <Icon active name="grid" />
              <Text style={footerStyles.footerMenu}>My Orders</Text>
            </Button>
            <Button vertical>
              <Icon name="menu" />
              <Text style={footerStyles.footerMenu}>Menu</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}