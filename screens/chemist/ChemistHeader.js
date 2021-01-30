import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Thumbnail } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class ChemistHeader extends Component {
  
  render() {
    return (
      <Footer style={headerStyles.headerBgColor}>
        <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('ChemistHome')}>
              {<Thumbnail style={headerStyles.headerFooterIcon} 
                small square source={require('../images/home.png')}/> }
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
              { <Thumbnail small source={require('../images/chemistprofile.jfif')}/> }
            </Button>
          </FooterTab>
      </Footer>
    );
  }
}
