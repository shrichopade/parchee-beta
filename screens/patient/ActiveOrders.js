import * as React from 'react';
import { DataTable } from 'react-native-paper';

const ActiveOrders = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Order No</DataTable.Title>
      <DataTable.Title>Order Date</DataTable.Title>
      <DataTable.Title>Amount</DataTable.Title>
      <DataTable.Title>Status</DataTable.Title>
      <DataTable.Title>Chemist</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>001</DataTable.Cell>
      <DataTable.Cell>11/01/2021</DataTable.Cell>
      <DataTable.Cell>Rs 526</DataTable.Cell>
      <DataTable.Cell>Delivered</DataTable.Cell>
      <DataTable.Cell>Mahalakshmi</DataTable.Cell>
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

export default ActiveOrders;