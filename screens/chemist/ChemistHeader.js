import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Thumbnail, ActionSheet } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

var BUTTONS = [
    { text: "Profile", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Preferences", icon: "analytics", iconColor: "#f42ced" },
    { text: "Signout", icon: "aperture", iconColor: "#ea943b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];

var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;

export default class ChemistHeader extends Component {
  /*
    constructor(props) {
        super(props);
        this.state = {};
    }
  */
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
            <Button vertical 
            /*
                onPress={() =>
                    ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "My Profile"
                        },
                        buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                    )}
            */
            >
              <Thumbnail small source={require('../images/chemistprofile.jfif')}/>
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}