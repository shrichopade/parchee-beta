import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';

export default class PatientHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
            <Thumbnail source={{ uri: '../images/profile.jpg' }} />
            </Button>
          </Right>
        </Header>
    );
  }
}