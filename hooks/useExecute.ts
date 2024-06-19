"use client";
import { useCallback } from "react";
import { useClient } from "./useClient";
import { Coin, MsgData, StdFee } from "@archwayhq/arch3.js";
import { useRecoilValue } from "recoil";
import { archwayStore } from "@/state/atoms";

export default function useExecuteContract(address: string, msg: any) {
	const store = useRecoilValue(archwayStore);

	const execute = useCallback(
		async (
			account = store.accounts[0].address,
			fee = "auto" as "auto",
			memo = "execute starter template",
			funds?: Coin[]
		) => {
			if (!store.client) return;
			const result = await store.client.execute(
				account,
				address,
				msg,
				fee,
				memo,
				funds
			);
			return result;
		},
		[store, address, msg]
	);
	return execute;
}
