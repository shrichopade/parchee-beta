import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

export default class PatientFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>My Appointments</Text>
            </Button>
            <Button vertical>
              <Icon name="person" /> 
              <Text>My Doctors/ Chemists</Text>
            </Button>
            <Button vertical active>
              <Icon active name="grid" />
              <Text>My Orders</Text>
            </Button>
            <Button vertical>
              <Icon name="navigate" />
              <Text>Menu</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}