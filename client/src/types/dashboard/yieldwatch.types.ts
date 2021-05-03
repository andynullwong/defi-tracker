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

interface PoolMetadata {
  vaults: VaultMetadata;
  LPVaults: VaultMetadata;
  staking: VaultMetadata;
  barnOfTrust: VaultMetadata;
}

export interface VaultMetadata {
  totalUSDValues: TotalUSDValues;
  vaults: Array<Vaults>;
}

interface Vaults {
  name: string;
  type: string;
  contractAddress: string;
  platform: string;
  depositToken: string;
  priceInUSDDepositToken: number;
  apy: number;
  currentTokens: number;
  depositedTokens: number;
  vaultSessions: Array<any>;
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
