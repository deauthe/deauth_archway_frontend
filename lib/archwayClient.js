"use client";
import { KeplrConnectionStatus } from "@/state/atoms";
import { ChainInfo } from "./archwayConfig";
let accounts, CosmWasmClient, queryHandler;
import { SigningArchwayClient } from "@archwayhq/arch3.js";

export async function connectArchwayClient() {
	if (window["keplr"]) {
		if (window.keplr["experimentalSuggestChain"]) {
			await window.keplr.experimentalSuggestChain(ChainInfo);
			await window.keplr.enable(ChainInfo.chainId);
			if (!window.keplr.defaultOptions) {
				window.keplr.defaultOptions = {
					sign: {
						preferNoSetFee: true,
					},
				};
			}

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
			return {
				offlineSigner: offlineSigner,
				client: CosmWasmClient,
				accounts: accounts,
				chain: ChainInfo,
				queryHandler: queryHandler,
				error: null,
				isConnected: true,
				chainId: ChainInfo.chainId,
				keplr: window.keplr,
				keplrStatus: KeplrConnectionStatus.Ok,
				autoconnect: true,
			};
		}
	} else {
		alert("Error accessing Keplr, please install Keplr");

		return {
			error: "Keplr not found",
		};
	}
}
