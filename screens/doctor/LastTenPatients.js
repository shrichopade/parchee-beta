import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Thumbnail } from 'native-base';
import { styles } from '../styles/defaultStyles.js'

const LastTenPatients = () => (
  <DataTable>
    <DataTable.Header style={styles.tableHeaderBgColor}>
      <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Date</DataTable.Title>
      <DataTable.Title>Patient</DataTable.Title>
      <DataTable.Title>Patient Image</DataTable.Title>
      <DataTable.Title>Dignosis</DataTable.Title>
      <DataTable.Title>Followup</DataTable.Title>
      <DataTable.Title>Notes</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell style={styles.tableCellText}>23/01/2021</DataTable.Cell>
      <DataTable.Cell>Amit Shah</DataTable.Cell>
      <DataTable.Cell><Thumbnail small source={require('../images/amit-shah.jpg')}/></DataTable.Cell>
      <DataTable.Cell>Amibiosis</DataTable.Cell>
      <DataTable.Cell>In 3 months</DataTable.Cell>
      <DataTable.Cell>Refered testing</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell style={styles.tableCellText}>23/01/2021</DataTable.Cell>
      <DataTable.Cell>Udhav Thakare</DataTable.Cell>
      <DataTable.Cell><Thumbnail small source={require('../images/udhavthakre.jpg')}/></DataTable.Cell>
      <DataTable.Cell>Amibiosis</DataTable.Cell>
      <DataTable.Cell>In 3 months</DataTable.Cell>
      <DataTable.Cell>Refered testing</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.tableCellText}>23/01/2021</DataTable.Cell>
      <DataTable.Cell>John Major</DataTable.Cell>
      <DataTable.Cell><Thumbnail small source={require('../images/johnmajor.jpg')}/></DataTable.Cell>
      <DataTable.Cell>Amibiosis</DataTable.Cell>
      <DataTable.Cell>In 3 months</DataTable.Cell>
      <DataTable.Cell>Refered testing</DataTable.Cell>
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

export default LastTenPatients;