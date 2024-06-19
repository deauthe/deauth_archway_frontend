"use client";

import { Coin } from "@cosmjs/proto-signing";
import { useCallback } from "react";
import { useClient } from "./useClient";
import { MsgData } from "@archwayhq/arch3.js";
import { useRecoilValue } from "recoil";
import { archwayStore } from "@/state/atoms";

/**
 * A hook for creating a new contract, returns an async instantiate function
 * @returns instantiate
 */
export default function useInstantiateContract() {
	const store = useRecoilValue(archwayStore);

	const instantiate = useCallback(
		async (
			codeId: number,
			msg: MsgData,
			label = "Instantiate with Starter Template",
			fee: "auto",
			memo = "Instantiate with Starter Template",
			funds?: Coin[]
		) => {
			return store.client!.instantiate(
				store.accounts[0].address,
				codeId,
				msg,
				label,
				fee,
				{
					memo,
					funds,
				}
			);
		},
		[store]
	);

	return instantiate;
}
