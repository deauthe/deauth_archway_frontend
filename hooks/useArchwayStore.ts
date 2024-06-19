"use client";

import { archwayStore } from "@/state/atoms";
import { useRecoilValue } from "recoil";

export default function useArchwayStore() {
	const {
		accounts,
		autoconnect,
		chainId,
		isConnected,
		isLoading,
		keplr,
		keplrStatus,
		client,
	} = useRecoilValue(archwayStore);

	return {
		accounts,
		autoconnect,
		chainId,
		isConnected,
		isLoading,
		keplr,
		keplrStatus,
		client,
	};
}
