import React, { useState } from "react";
import NFTCard from "../NFTCard";

type Props = {};

function MarketPlaceContainer({}: Props) {
	const [listedNfts, setListedNfts] = useState([1, 2, 3, 4, 5, 6]);
	return (
		<div className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-5 md:gap-10 md:p-5 lg:p-10">
			{listedNfts.map((nft) => {
				return <NFTCard key={nft} tokenId="asdwd" />;
			})}
		</div>
	);
}

export default MarketPlaceContainer;
