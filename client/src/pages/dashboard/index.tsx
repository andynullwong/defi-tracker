import { useDispatch, useSelector } from 'react-redux';
import { columns, data } from './mockData';
import BalanceTable from '../../components/dashboard/BalanceTable';
import {
  selectDepositBalance,
  selectWalletBalance,
  selectYieldBalance,
} from '../../store/dashboard/slice';
import './index.css';
import { yieldwatchFetch } from '../../store/api-calls/yieldwatch';
import { currencyFormatter } from '../../utils';
import { useEffect } from 'react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const walletBalance = useSelector(selectWalletBalance);
  const depositBalance = useSelector(selectDepositBalance);
  const yieldBalance = useSelector(selectYieldBalance);

  useEffect(() => {
    yieldwatchFetch('0x531ebe0e99d98a532a6f07105134d18d406aa550', dispatch);
  }, [dispatch]);

  return (
    <>
      <div>Wallet Balance: {currencyFormatter(walletBalance)}</div>
      <div>Deposit Balance: {currencyFormatter(depositBalance)}</div>
      <div>Yield Balance: {currencyFormatter(yieldBalance)}</div>
      <BalanceTable currency={'usdc'} columns={columns} data={data} />
    </>
  );
};

export default Dashboard;
