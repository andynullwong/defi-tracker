import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import {
  VaultMetadata,
  YieldwatchApi,
} from '../../types/api-calls/yieldwatch.types';
import {
  setWalletBalance,
  resetWalletBalance,
  addWalletBalance,
} from '../dashboard/slice';

export const yieldwatchFetch = async (
  address: string,
  dispatch: Dispatch<AnyAction>
) => {
  const res = await fetch(`api/wallet/${address}`);
  const json = await res.json();

  parseYieldwatchJson(json, dispatch);
};

const parseYieldwatchJson = (
  json: YieldwatchApi,
  dispatch: Dispatch<AnyAction>
) => {
  const { status, message, result } = json;

  if (status !== '1' || message !== 'OK') {
    console.log('Error in Yieldwatch API', status, message);
  } else {
    const { walletBalance, BeefyFinance } = result;
    const { vaults, LPVaults, staking, barnOfTrust } = BeefyFinance;

    dispatch(resetWalletBalance());
    dispatch(setWalletBalance(walletBalance.totalUSDValue));

    parseVaultMetadata(vaults, dispatch);
    parseVaultMetadata(LPVaults, dispatch);
    parseVaultMetadata(staking, dispatch);
    parseVaultMetadata(barnOfTrust, dispatch);
  }
};

const parseVaultMetadata = (
  metadata: VaultMetadata,
  dispatch: Dispatch<AnyAction>
) => {
  const { totalUSDValues, vaults } = metadata;
  dispatch(addWalletBalance(totalUSDValues));
  vaults.forEach((v) => {
    // TODO: Add vault info to Cards
    console.log('Fetching Vault Data:', v);
  });
};
