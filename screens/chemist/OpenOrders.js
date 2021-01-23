import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Thumbnail, Button, Text } from 'native-base';
import { styles } from '../styles/defaultStyles.js'

export default class OrderDetails extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <DataTable>
                <DataTable.Header style={styles.tableHeaderBgColor}>
                    <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Order No</DataTable.Title>
                    <DataTable.Title>Order Date</DataTable.Title>
                    <DataTable.Title>Patient Name</DataTable.Title>
                    <DataTable.Title>Doctor Name</DataTable.Title>
                    <DataTable.Title>Due Date</DataTable.Title>
                    <DataTable.Title>View More</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={styles.tableCellText}>ODR00024</DataTable.Cell>
                    <DataTable.Cell style={styles.tableCellText}>21/01/2021</DataTable.Cell>
                    <DataTable.Cell>Mr P Datar</DataTable.Cell>
                    <DataTable.Cell>Dr T Joshi</DataTable.Cell>
                    <DataTable.Cell>23/01/2021</DataTable.Cell>
                    <DataTable.Cell>
                        <Button transparent onPress={() => this.props.navigation.navigate('OrderDetails')}>
                            <Text style={styles.tableCellText}>View</Text>
                        </Button>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={styles.tableCellText}>ODR00029</DataTable.Cell>
                    <DataTable.Cell style={styles.tableCellText}>22/01/2021</DataTable.Cell>
                    <DataTable.Cell>Mr T Khote</DataTable.Cell>
                    <DataTable.Cell>Dr S Kulkarni</DataTable.Cell>
                    <DataTable.Cell>24/01/2021</DataTable.Cell>
                    <DataTable.Cell>
                        <Button transparent onPress={() => this.props.navigation.navigate('OrderDetails')}>
                            <Text style={styles.tableCellText}>View</Text>
                        </Button>
                    </DataTable.Cell>                
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={styles.tableCellText}>ODR00050</DataTable.Cell>
                    <DataTable.Cell style={styles.tableCellText}>23/01/2021</DataTable.Cell>
                    <DataTable.Cell>Mrs A Kumar</DataTable.Cell>
                    <DataTable.Cell>Dr S Sutar</DataTable.Cell>
                    <DataTable.Cell>28/01/2021</DataTable.Cell>
                    <DataTable.Cell>
                        <Button transparent onPress={() => this.props.navigation.navigate('OrderDetails')}>
                            <Text style={styles.tableCellText}>View</Text>
                        </Button>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                    console.log(page);
                }}
                label="1-2 of 6"
                />
            </DataTable>
        )
    }
};

