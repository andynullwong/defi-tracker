export interface DashboardState {
  walletBalance: number;
  depositBalance: number;
  yieldBalance: number;
  vaults: CryptoBalance<Vault>;
  lpVaults: CryptoBalance<any>;
  staking: CryptoBalance<any>;
}

interface CryptoBalance<T> {
  [x: string]: Array<T>;
  //   btc: Array<T>;
  //   eth: Array<T>;
  //   usdc: Array<T>;
}

interface Vault {
  apy: number;
  contractAddress: string;
  currentTokens: number;
  depositToken: string;
  depositTokenAddress: string;
  depositedTokens: number;
  name: string;
  platform: VaultPlatform;
  priceInUSDDepositToken: number;
  type: VaultType;
}

enum VaultType {
  lpVault = 'lpVault',
  vault = 'vault',
}

enum VaultPlatform {
  beefy = 'beefy',
}
