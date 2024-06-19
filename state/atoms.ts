import { atom } from "recoil";
import { AccountData, Keplr } from "@keplr-wallet/types";
import { SigningArchwayClient } from "@archwayhq/arch3.js";
import { ChainInfo } from "@/lib/archwayConfig";
export enum KeplrConnectionStatus {
	Ok,
	NotInstalled,
	Connecting,
}

export interface ArchwayStore {
	client?: SigningArchwayClient;
	chainId: string;
	isConnected: boolean;
	keplr: Keplr | undefined;
	keplrStatus: KeplrConnectionStatus;
	accounts: Readonly<AccountData[]>;
	autoconnect: boolean;
	isLoading: boolean;
}

export const archwayStore = atom<ArchwayStore>({
	key: "archwayStore",
	default: {
		client: undefined,
		chainId: ChainInfo.chainId,
		isConnected: false,
		keplr: undefined,
		keplrStatus: KeplrConnectionStatus.NotInstalled,
		accounts: [],
		autoconnect: true,
		isLoading: false,
	},
});
