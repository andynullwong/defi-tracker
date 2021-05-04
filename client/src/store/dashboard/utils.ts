const depositTokenToErcCompliantTokenMap = {
  '4BeltLP': 'USDC',
  beltBTC: 'BTC',
  beltETH: 'ETH',
};

export const mapDepositTokenToErcCompliantToken = (tokenName: string) =>
  depositTokenToErcCompliantTokenMap[
    tokenName as keyof typeof depositTokenToErcCompliantTokenMap
  ] ?? tokenName;

export const mapDepositLPToTokenPair = (lpName: string) => {
  // TODO
  // Sample Input: ETH-BTCB LP
  // Sample output: Look in 'LPInfo.symbolToken0 and symbolToken1'
};
