export interface DashboardState {
  singleAssetVault: Array<CryptoBalance>;
  lpVault: Array<any>;
  staking: Array<any>;
}

interface CryptoBalance {
  bifi: Array<Vault>;
  btc: Array<Vault>;
  eth: Array<Vault>;
  mash: Array<Vault>;
  usdc: Array<Vault>;
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
