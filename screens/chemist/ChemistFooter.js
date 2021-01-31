import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Thumbnail } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js';


export default class ChemistFooter extends Component {
  render() {
    return (
        <Footer style={footerStyles.footerBgColor}>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
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