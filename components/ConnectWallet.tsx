"use client";

import React, { FC } from "react";
import Connected from "./Connected";

import Image from "next/image";
import useArchwayStore from "@/hooks/useArchwayStore";
import { useClient } from "@/hooks/useClient";
import { useRecoilState } from "recoil";
import { archwayStore } from "@/state/atoms";
import { connectArchwayClient } from "@/lib/archwayClient";
interface ConnectWalletProps {}
const ConnectWallet: FC<ConnectWalletProps> = (props) => {
	const {} = props;
	const { isLoading } = useArchwayStore();
	const [store, setStore] = useRecoilState(archwayStore);

	const connectWalletAction = async () => {
		const store = await connectArchwayClient();
		setStore((prev) => {
			return { ...prev, ...store };
		});
		console.log(store);
	};

	if (store.client) {
		return <Connected />;
	}
	return (
		<button
			className="btn btn-primary btn-sm rounded-full"
			onClick={connectWalletAction}
			disabled={isLoading}
		>
			{isLoading ? (
				// <p>Connecting....</p>
				<Image src={"/loader.gif"} alt="gif" width={100} height={100} />
			) : (
				<p>Connect Wallet</p>
			)}
		</button>
	);
};
export default ConnectWallet;
