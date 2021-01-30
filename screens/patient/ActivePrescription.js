import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Thumbnail } from 'native-base';
import { styles } from '../styles/defaultStyles.js'

const ActivePrescription = () => (
  <DataTable>
    <DataTable.Header style={styles.tableHeaderBgColor}>
      <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Medicine Name</DataTable.Title>
      <DataTable.Title>Strength</DataTable.Title>
      <DataTable.Title>Dosage</DataTable.Title>
      <DataTable.Title>Image</DataTable.Title>
      <DataTable.Title>Doctor</DataTable.Title>
      <DataTable.Title>Notes</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell style={styles.tableCellText}>Amoxycyline</DataTable.Cell>
      <DataTable.Cell>500 mg</DataTable.Cell>
      <DataTable.Cell>1-1-0</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../images/tablet.jfif')}/></DataTable.Cell>      
      <DataTable.Cell><Thumbnail small source={require('../images/drjoshi.jfif')}/></DataTable.Cell>
      <DataTable.Cell></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Amlodipine</DataTable.Cell>
      <DataTable.Cell>10 mg</DataTable.Cell>
      <DataTable.Cell>1-0-0</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../images/capsule.jfif')}/></DataTable.Cell>
      <DataTable.Cell><Thumbnail small source={require('../images/drmote.png')}/></DataTable.Cell>
      <DataTable.Cell></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Novolin Insulin</DataTable.Cell>
      <DataTable.Cell>30 ml</DataTable.Cell>
      <DataTable.Cell>1-0-1</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../images/insulin.jfif')}/></DataTable.Cell>
      <DataTable.Cell><Thumbnail small source={require('../images/drkhote.jfif')}/></DataTable.Cell>
      <DataTable.Cell>10 min before meal</DataTable.Cell>
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
);

export default ActivePrescription;