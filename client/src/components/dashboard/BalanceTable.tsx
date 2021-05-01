import React from 'react';
import { Table, Typography } from 'antd';

const { Text } = Typography;

const BalanceTable = (props: any) => (
  <>
    <div>
      <i className={`cf-${props.currency}`} />
      <Text className='dashboard-coin-name'>
        {props.currency.toUpperCase()}
      </Text>
    </div>

    <Table
      columns={props.columns}
      dataSource={props.data}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalDeposit = 0;
        let totalYield = 0;
        let totalInterest = 0;
        let grandTotal = 0;

        pageData.forEach(({ deposit, profit, interest, total }) => {
          totalDeposit += deposit;
          totalYield += profit;
          totalInterest += interest;
          grandTotal += total;
        });

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell index={1}>
                <strong>Total</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <Text>{totalDeposit}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                <Text>{totalYield}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4}>
                <Text>{totalInterest}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={5}>
                <Text>{grandTotal}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  </>
);

export default BalanceTable;
