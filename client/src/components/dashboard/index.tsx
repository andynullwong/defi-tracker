import React from 'react';
import { columns, data } from './mockData';
import BalanceTable from './BalanceTable';
import { YieldwatchApi } from '../../types/dashboard/yieldwatch.types';
import './index.css';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();

  // const testFetch: () => Promise<YieldwatchApi> = async () => {
  //   const res = await fetch(
  //     `api/wallet/0x531ebe0e99d98a532a6f07105134d18d406aa550`
  //   );
  //   const json = await res.json();
  //   return json;
  // };

  // console.log(testFetch());

  return (
    <>
      <BalanceTable currency={'usdc'} columns={columns} data={data} />
    </>
  );
};

export default Dashboard;
