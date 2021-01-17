import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class PatientHeader extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
            <Button vertical>
              <Icon name="alarm" /> 
              <Text>Reminders</Text>
            </Button>
            <Button vertical active>
              <Icon active name="keypad" />
              <Text>Notes</Text>
            </Button>
            <Button vertical>
              <Icon name="film" />
              <Text>QR Code</Text>
            </Button>
            <Button vertical>
              <Icon name="medkit" />
              <Text>Special Offers</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}