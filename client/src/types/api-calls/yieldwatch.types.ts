export interface YieldwatchApi {
  status: string; // 1
  message: string; // OK
  result: YieldWatchResult;
}

interface YieldWatchResult {
  watchBalance: WatchBalance;
  currencies: Currencies;
  walletBalance: WalletBalance;
  BeefyFinance: PoolMetadata;
}

interface WatchBalance {
  USDPrice: number;
  totalBalance: number;
  maxMonitorValue: number;
  walletBalance: number;
  watchFromLP: number;
}

interface Currencies {
  EUR: number;
  RMB: number;
  JPY: number;
  GBP: number;
  BTCB: number;
  WBNB: number;
  BRL: number;
  AUD: number;
  HKD: number;
  SGD: number;
  RUB: number;
  KRW: number;
  CAD: number;
  THB: number;
  CHF: number;
}

export interface PoolMetadata {
  vaults: VaultMetadata<Vault>;
  LPVaults: VaultMetadata<LPVault>;
  staking: VaultMetadata<any>;
  barnOfTrust: VaultMetadata<any>;
}

export interface VaultMetadata<T> {
  totalUSDValues: TotalUSDValues;
  vaults: Array<T>;
}

export interface Vault {
  name: string;
  type: VaultType;
  contractAddress: string;
  platform: VaultPlatform;
  depositToken: string;
  priceInUSDDepositToken: number;
  apy: number;
  currentTokens: number;
  depositedTokens: number;
  vaultSessions: Array<any>;
}

export interface LPVault extends Vault {
  depositTokenAddress: string;
  LPinfo: {
    compactSessions: Array<any>;
    symbolToken0: string;
    symbolToken1: string;
    depositToken0: number;
    depositToken1: number;
    priceInUSDToken0: number;
    priceInUSDToken1: number;
    changeToken0: number;
    changeToken1: number;
    feesEarnedInToken0: number;
    feesEarnedInToken1: number;
    winningsToken0: number;
    winningsToken1: number;
    currentToken0: number;
    currentToken1: number;
    poolToken0: number;
    poolToken1: number;
    actPrice: number;
    hodlInToken1: number;
    actInToken1: number;
    ILInToken1: number;
    faktorIL: number;
    depositPrice: number;
  };
}

interface TotalUSDValues {
  deposit: number;
  yield: number;
  total: number;
}

interface WalletBalance {
  totalUSDValue: number;
  balances: Array<any>;
}

export enum VaultType {
  vault = 'vault',
  lpVault = 'lpVault',
  staking = 'staking',
  barnOfTrust = 'barnOfTrust',
}

enum VaultPlatform {
  beefy = 'beefy',
}
