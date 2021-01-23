import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { Container, Content, Text, Thumbnail, Card, CardItem, Button, ListItem } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'
import { styles } from '../styles/defaultStyles.js'

export default class OrderDetails extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  render() {
    return (
      <Container style={dStyles.container}>
        <Content>
          <Card style={dStyles.cardStyle}>
            <CardItem header bordered>
              <Text style={dStyles.formTitle}> Order No - ODR00024 </Text>
            </CardItem>
            <CardItem bordered style={dStyles.cardItemBodyStyle}>
                <ListItem>
                    <Text style={dStyles.generalText}>Patient : Mr P Datar</Text>
                </ListItem>
                <ListItem>
                    <Text style={dStyles.generalText}>Doctor : Mr T Joshi</Text>
                </ListItem>
                <ListItem>
                    <Text style={dStyles.generalText}>Order Date : 21/01/2021</Text>
                </ListItem>
                <ListItem>
                    <Text style={dStyles.generalText}>Due Date : 24/01/2021</Text>
                </ListItem>
                <ListItem>
                    <Text style={dStyles.generalText}>Order Type : One Time</Text>
                </ListItem>
                <ListItem>
                    <Text style={dStyles.generalText}>Status : Open</Text>
                </ListItem>
            </CardItem>
            <CardItem footer bordered>
                <DataTable>
                    <DataTable.Header style={styles.tableHeaderBgColor}>
                        <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Medicine</DataTable.Title>
                        <DataTable.Title>Strength</DataTable.Title>
                        <DataTable.Title>Image</DataTable.Title>
                        <DataTable.Title>Quantity</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell style={styles.tableCellText}>Amoxycyline</DataTable.Cell>
                        <DataTable.Cell>500 mg</DataTable.Cell>
                        <DataTable.Cell><Thumbnail small square source={require('../images/tablet.jfif')}/></DataTable.Cell>
                        <DataTable.Cell>90</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Amlodipine</DataTable.Cell>
                        <DataTable.Cell>10 mg</DataTable.Cell>
                        <DataTable.Cell><Thumbnail small square source={require('../images/capsule.jfif')}/></DataTable.Cell>
                        <DataTable.Cell>60</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Novolin Insulin</DataTable.Cell>
                        <DataTable.Cell>30 ml</DataTable.Cell>
                        <DataTable.Cell><Thumbnail small square source={require('../images/insulin.jfif')}/></DataTable.Cell>
                        <DataTable.Cell>30</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>

                  
                </CardItem>
                <Button success style={dStyles.buttonStyle} 
                    onPress={() => this.props.navigation.navigate('OpenOrders')}>
                    <Text style={dStyles.buttonText}>Dispatched</Text>
                </Button>
            </Card>
          </Content>
      </Container>
    );
  }
};