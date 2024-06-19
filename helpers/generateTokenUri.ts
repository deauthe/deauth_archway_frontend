import { SigningArchwayClient } from "@archwayhq/arch3.js";
import { NFT_metadata } from "./staticRandomNfts";
import { v4 as uuidv4, V4Options } from "uuid";

export type TokenData = {
	token_id: string;
	owner: string;
	token_uri: string;
	extension: {
		publisher: string;
	};
};

export const generateTokens = (
	generated_metadata: NFT_metadata[]
): TokenData[] => {
	const tokens: TokenData[] = generated_metadata.map((item, index) => {
		const token_id = uuidv4();
		const owner_of_minted_nft = process.env
			.NEXT_PUBLIC_CONTRACT_OWNER as string;
		return {
			token_id,
			owner: owner_of_minted_nft,
			token_uri: JSON.stringify(item),
			extension: {
				publisher: "",
			},
		};
	});
	return tokens;
};

export const createNFT = async (
	image: string,
	name: string,
	description: string,
	client: SigningArchwayClient,
	contract_address: string,
	sender_address: string
) => {
	if (!image || !name || !description) {
		console.log(
			"please fill fields:",
			image,
			"name:",
			name,
			"description:",
			description
		);
		return;
	}
	try {
		const token_id = uuidv4();
		const token_uri: NFT_metadata = {
			name,
			description,
			image: image,
		};

		await mintNft(
			token_id,
			sender_address,
			JSON.stringify(token_uri),
			client,
			contract_address,
			sender_address
		);
	} catch (error) {
		console.log("error creatign nfts ", error);
	}
};

const mintNft = async (
	token_id: string,
	owner: string,
	token_uri: string,
	client: SigningArchwayClient,
	contract_address: string,
	sender_address: string
) => {
	console.log(
		"this is my contract and my token Id: ",
		contract_address,
		token_id
	);
	const mintMessage = {
		mint: {
			token_id,
			owner,
			token_uri,
			extension: {
				publisher: "Andromeda",
			},
		},
	};
	const mintedNft = await client
		?.execute(sender_address, contract_address, mintMessage, "auto")
		.then((res) => {
			alert("nft minted succesfullt");
			return res;
		});
	localStorage.setItem("mainNftTokenId", token_id);
};
