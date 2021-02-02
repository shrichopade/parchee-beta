import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { View } from 'react-native';
import { Container, Content, Text, Thumbnail, Card, CardItem, Button, ListItem } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js';
import { styles } from '../styles/defaultStyles.js';

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
    const isOrderStatusOpen = (this.props.route.params.orderStatus  == 'Open')
    return (
          <Card style={dStyles.cardStyle}>
            <CardItem header>
              <Text style={dStyles.formTitle}> Order No - ODR00024 </Text>
            </CardItem>
            <CardItem>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell style={styles.tableCellText}>Patient :</DataTable.Cell>
                        <DataTable.Cell>Mr P Datar</DataTable.Cell>
                        <DataTable.Cell>Doctor :</DataTable.Cell>
                        <DataTable.Cell>Dr T Joshi</DataTable.Cell>
                        <DataTable.Cell>Order Type :</DataTable.Cell>
                        <DataTable.Cell>One Time</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={styles.tableCellText}>Order Date :</DataTable.Cell>
                        <DataTable.Cell>21/01/2021</DataTable.Cell>
                        <DataTable.Cell>Due Date :</DataTable.Cell>
                        <DataTable.Cell>24/01/2021</DataTable.Cell>
                        <DataTable.Cell>Status :</DataTable.Cell>
                        <DataTable.Cell>{ this.props.route.params.orderStatus } </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
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
                        {/* <DataTable.Cell><Thumbnail small square source={tablet}/></DataTable.Cell> */}
                        <DataTable.Cell><Thumbnail small square source={require('../images/tablet.png')}/></DataTable.Cell>
                        <DataTable.Cell>90</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Amlodipine</DataTable.Cell>
                        <DataTable.Cell>10 mg</DataTable.Cell>
                        {/* <DataTable.Cell><Thumbnail small square source={capsule}/></DataTable.Cell>  */}
                        <DataTable.Cell><Thumbnail small square source={require('../images/capsule.png')}/></DataTable.Cell> 
                        <DataTable.Cell>60</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Novolin Insulin</DataTable.Cell>
                        <DataTable.Cell>30 ml</DataTable.Cell>
                        {/* <DataTable.Cell><Thumbnail small square source={insulin}/></DataTable.Cell>  */}
                        <DataTable.Cell><Thumbnail small square source={require('../images/insulin.png')}/></DataTable.Cell> 
                        <DataTable.Cell>30</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>

                  
                </CardItem>
                <View style={dStyles.buttonContainer}>
                    <Button success style={dStyles.buttonStyle} 
                        onPress={() => this.props.navigation.navigate('ChemistHome', {orderStatus:this.props.route.params.orderStatus})}>
                        <Text style={dStyles.buttonText}>Back</Text>
                    </Button>
                    <Button success style={dStyles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('ChemistHome', {orderStatus:this.props.route.params.orderStatus})}>
                        <Text style={dStyles.buttonText}>{isOrderStatusOpen?'Dispatched':'Home'}</Text>
                    </Button> 
                </View>
            </Card>
    );
  }
};