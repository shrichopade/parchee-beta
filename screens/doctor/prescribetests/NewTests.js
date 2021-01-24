import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Thumbnail } from 'native-base';
import { styles } from '../../styles/defaultStyles.js'

const NewTests = () => (
  <DataTable>
    <DataTable.Header style={styles.tableHeaderBgColor}>
      <DataTable.Title sortDirection='ascending' style={styles.tableHeaderText}>Tests Name</DataTable.Title>
      <DataTable.Title>Description</DataTable.Title>
      <DataTable.Title>Timing</DataTable.Title>
      <DataTable.Title>Notes</DataTable.Title>     
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell style={styles.tableCellText}>Chest X-Ray</DataTable.Cell>
      <DataTable.Cell>Chest X Ray</DataTable.Cell>
      <DataTable.Cell> Tomorrow</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../../images/tablet.jfif')}/></DataTable.Cell>
      <DataTable.Cell></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Blood Tests</DataTable.Cell>
      <DataTable.Cell>Lipid Profile , HBA1C, Thyroid Function , Kidney Function</DataTable.Cell>
      <DataTable.Cell>Tomororw</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../../images/capsule.jfif')}/></DataTable.Cell>
      <DataTable.Cell>14 hr fasting before tests</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Blood Test</DataTable.Cell>
      <DataTable.Cell>HBA1C, Kidney Function</DataTable.Cell>
      <DataTable.Cell>After 1month</DataTable.Cell>
      <DataTable.Cell><Thumbnail small square source={require('../../images/insulin.jfif')}/></DataTable.Cell>
      <DataTable.Cell> </DataTable.Cell>
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

export default NewTests;