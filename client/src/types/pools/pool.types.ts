import { Vault, LPVault } from '../api-calls/yieldwatch.types';

export interface PoolState {
  vaults: Array<Vault>;
  lpVaults: Array<LPVault>;
  staking: Array<any>;
  barnOfTrust: Array<any>;
}
