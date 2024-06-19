"use client";
import { useCallback } from "react";
import { useClient } from "./useClient";
import { Coin, MsgData, StdFee } from "@archwayhq/arch3.js";
import { useRecoilValue } from "recoil";
import { archwayStore } from "@/state/atoms";

export default function useExecuteContract(address: string) {
	const client = useClient();
	const archwayStoreState = useRecoilValue(archwayStore);
	const accounts = archwayStoreState.accounts;

	const execute = useCallback(
		async (
			account = accounts[0].address,
			msg: MsgData,
			fee: StdFee | "auto" | number,
			memo = "execute starter template",
			funds?: Coin[]
		) => {
			if (!client) return;
			const result = await client.execute(
				account,
				address,
				msg,
				fee,
				memo,
				funds
			);
			return result;
		},
		[client, address, accounts]
	);
	return execute;
}
