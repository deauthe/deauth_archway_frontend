"use client";
import { ChevronDownIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Badge,
	HStack,
	Image,
	Input,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
} from "@chakra-ui/react";
import { ChainInfo } from "@/lib/archwayConfig";
import React, { FC } from "react";
import Link from "next/link";
import useArchwayStore from "@/hooks/useArchwayStore";
import { archwayStore, ArchwayStore } from "@/state/atoms";
import { useRecoilState } from "recoil";

interface ConnectedProps {}
const Connected: FC<ConnectedProps> = (props) => {
	const {} = props;
	const { accounts, chainId } = useArchwayStore();
	const account = accounts[0];
	const address = account?.address ?? "";
	const truncatedAddress =
		address.slice(0, 6) + "......" + address.slice(address.length - 4);
	const [store, setStore] = useRecoilState(archwayStore);

	const disconnectArchwayClient = () => {
		setStore((prev: ArchwayStore) => {
			return {
				...prev,
				accounts: [],
				isConnected: false,
				autoconnect: false,
				client: undefined,
			};
		});
	};
	return (
		<Popover placement="bottom-end">
			{({ isOpen }) => (
				<>
					<PopoverTrigger>
						<button className="btn btn-secondary rounded-full btn-sm">
							<HStack mr="2">
								<Text fontSize="md">{truncatedAddress}</Text>
								<Badge
									colorScheme={
										ChainInfo?.chainType === "mainnet" ? "green" : "purple"
									}
									fontSize={8}
									py="1"
									rounded="full"
								>
									{ChainInfo?.chainType}
								</Badge>
							</HStack>
							<ChevronDownIcon boxSize={4} />
						</button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverBody className="p-4 bg-secondary text-secondary-content rounded-3xl">
							<HStack mb={3} justifyContent="start">
								<Text fontWeight={600} color="gray.700" flex={1} className="">
									{ChainInfo?.chainName ?? ChainInfo?.chainId}
								</Text>
								<Badge
									colorScheme={
										ChainInfo?.chainType === "mainnet" ? "green" : "purple"
									}
									fontSize={8}
									py="1"
									rounded="full"
								>
									{ChainInfo?.chainType}
								</Badge>
							</HStack>
							<input
								value={account?.address ?? ""}
								readOnly
								className="mt-5 bg-none border-2 border-red-400 text-black input input-disabled"
							/>
							<HStack
								mb={6}
								className=" flex justify-center items-center mt-5 w-full"
							>
								<Link
									href={
										ChainInfo?.blockExplorerAddressPages[0]?.replaceAll(
											"${address}",
											account?.address ?? ""
										)!
									}
									className="text-secondary-content hover:text-white duration-200 transition-all"
								>
									Explorer
								</Link>
								<button
									className="btn btn-primary bordered shadow-lg btn-sm rounded-full"
									onClick={disconnectArchwayClient}
								>
									Disconnect
								</button>
							</HStack>
						</PopoverBody>
					</PopoverContent>
				</>
			)}
		</Popover>
	);
};
export default Connected;
