export const ChainInfo = {
	chainId: "constantine-3",
	chainName: "Constantine Testnet",
	rpc: "https://rpc.constantine.archway.io",
	rest: "https://api.constantine.archway.io",
	stakeCurrency: {
		coinDenom: "CONST",
		coinMinimalDenom: "aconst",
		coinDecimals: 18,
	},
	chainType: "testnet",
	blockExplorerAddressPages: ["https://www.mintscan.io/archway-testnet"],
	bip44: { coinType: 118 },
	bech32Config: {
		bech32PrefixAccAddr: "archway",
		bech32PrefixAccPub: "archwaypub",
		bech32PrefixValAddr: "archwayvaloper",
		bech32PrefixValPub: "archwayvaloperpub",
		bech32PrefixConsAddr: "archwayvalcons",
		bech32PrefixConsPub: "archwayvalconspub",
	},
	currencies: [
		{ coinDenom: "CONST", coinMinimalDenom: "aconst", coinDecimals: 18 },
	],
	feeCurrencies: [
		{ coinDenom: "CONST", coinMinimalDenom: "aconst", coinDecimals: 18 },
	],
	coinType: 118,
	gasPriceStep: { low: 0, average: 0.1, high: 0.2 },
	features: ["cosmwasm"],
};

export const currency = {
	coinDenom: "CONST",
	coinMinimalDenom: "aconst",
	coinDecimals: 18,
	coinGeckoId: "constantine-network",
};
