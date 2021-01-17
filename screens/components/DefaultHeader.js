import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { headerStyles } from '../styles/headerStyles.js'

export default class DefaultHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={headerStyles.headerTitle}>Register</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
    );
  }
}