import { SigningArchwayClient } from "@archwayhq/arch3.js";
import { ChainInfo } from "@/lib/archwayConfig";
let accounts, CosmWasmClient, queryHandler;
import { Keplr } from "@keplr-wallet/types";

export async function connectKeplrWallet() {
	if (window["keplr"]) {
		if (window.keplr["experimentalSuggestChain"]) {
			await window.keplr.experimentalSuggestChain(ChainInfo);
			await window.keplr.enable(ChainInfo.chainId);
			window.keplr.defaultOptions = {
				sign: {
					preferNoSetFee: true,
				},
			};
			const offlineSigner = await window.getOfflineSignerAuto(
				ChainInfo.chainId
			);
			CosmWasmClient = await SigningArchwayClient.connectWithSigner(
				ChainInfo.rpc,
				offlineSigner
			);
			// This async waits for the user to authorize your dapp
			// it returns their account address only after permissions
			// to read that address are granted
			accounts = await offlineSigner.getAccounts();
			// A less verbose reference to handle our queries
			queryHandler = CosmWasmClient.queryContractSmart;
			console.log("Wallet connected", {
				offlineSigner: offlineSigner,
				CosmWasmClient: CosmWasmClient,
				accounts: accounts,
				chain: ChainInfo,
				queryHandler: queryHandler,
			});
		}
	} else {
		alert("Error accessing Keplr, please install Keplr");
	}
}
