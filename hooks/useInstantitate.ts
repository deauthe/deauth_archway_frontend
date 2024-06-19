"use client";

import { Coin } from "@cosmjs/proto-signing";
import { useCallback } from "react";
import { useClient } from "./useClient";
import { MsgData } from "@archwayhq/arch3.js";

/**
 * A hook for creating a new contract, returns an async instantiate function
 * @returns instantiate
 */
export default function useInstantiateContract() {
	const client = useClient();

	const instantiate = useCallback(
		async (
			codeId: number,
			msg: MsgData,
			label = "Instantiate with Starter Template",
			fee: Fee,
			memo = "Instantiate with Starter Template",
			funds?: Coin[]
		) => {
			return client!.instantiate(codeId, msg, label, fee, {
				memo,
				funds,
			});
		},
		[client]
	);

	return instantiate;
}
