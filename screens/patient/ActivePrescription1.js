import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Accordion, Text, Icon } from 'native-base';

import { styles } from '../styles/accordianStyles.js'

export default class ActivePrescription1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            expended: 0,
            data: [
                {
                id:1,
                month: 'January',
                expenses: [
                    {
                    name: 'Rent',
                    value: 500,
                    
                    },
                    {
                    name: 'Food',
                    value: 230,
                    },
                    {
                    name: 'Gas',
                    value: 57,
                    },
                    {
                    name: 'Car',
                    value: 0,
                    },
                    {
                    name: 'Savings',
                    value: 717
                    }
                ]
                },
                {
                id:2,
                month: 'February',
                expenses: [
                    {
                    name: 'Rent',
                    value: 500,
                    
                    },
                    {
                    name: 'Food',
                    value: 200,
                    },
                    {
                    name: 'Gas',
                    value: 49,
                    },
                    {
                    name: 'Car',
                    value: 29,
                    },
                    {
                    name: 'Savings',
                    value: 870
                    }
                ]
                },
                {
                id:3,
                month: 'Mars',
                expenses: [
                    {
                    name: 'Rent',
                    value: 500,
                    
                    },
                    {
                    name: 'Food',
                    value: 231,
                    },
                    {
                    name: 'Gas',
                    value: 56,
                    },
                    {
                    name: 'Car',
                    value: 17,
                    },
                    {
                    name: 'Savings',
                    value: 760
                    }
                ]
                }
            ]
        };
    }

    renderHeader = (item) => {
        const { expended} = this.state
        return (
          <View style={styles.accordionHeader}>
            <Text style={{fontWeight: 'bold'}}>{item.month}</Text>
            <Icon 
              type = "AntDesign" 
              name = { expended === item.id ? 'upcircle' : 'downcircle' }
              style={{color: expended === item.id ? '#F6483B' : 'black'}}
            />
          </View>
        )
      }

    renderContent = (item) => {
        return (
          <View style={styles.accordionItems}>
            {item.expenses.map(m => {
              return (
                <View style={styles.accordionItemValue}>
                  <Text style={styles.accordionItemValueName}>{m.name}</Text>
                  <Text style={styles.accordionItemValueBadge}>+{m.value}$</Text>
                </View>
              )
            })}
            
          </View>
        )
      }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.accordion}>
                        <Text style={styles.accordionTitle}>Expenses</Text>
                        <Accordion 
                            style={styles.accordionItems}
                            dataArray={this.state.data}
                            renderHeader={this.renderHeader}
                            renderContent={this.renderContent}
                            onAccordionOpen={(item) => this.setState({expended: item.id})}
                            onAccordionClose={(item) => this.setState({expended: 0})}
                        /> 
                    </View>
                </View>
            </Container>
        );
    }   
}