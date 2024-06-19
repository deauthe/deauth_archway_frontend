"use client";
import { archwayStore } from "@/state/atoms";
import { SigningArchwayClient } from "@archwayhq/arch3.js";
import { useRecoilState } from "recoil";

export function useClient() {
	const [{ client, isConnected, isLoading }, setArchwayStore] =
		useRecoilState(archwayStore);
	if (!isConnected || isLoading) {
		return undefined;
	}
	return client as SigningArchwayClient;
}
