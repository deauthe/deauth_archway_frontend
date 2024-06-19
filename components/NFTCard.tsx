import Link from "next/link";
import React from "react";

type Props = {
	tokenId: string;
};

function NFTCard({ tokenId }: Props) {
	return (
		<Link
			className="card rounded-lg shadow-md  bg-primary"
			href={`/product/${tokenId}`}
		>
			<figure>
				<img src={`default.jpg`} alt="NFT" />
			</figure>
			<div className="card-title mx-auto">Mega Monké</div>
			<div className="card-body mx-auto">hoo hoo hoo</div>
		</Link>
	);
}

export default NFTCard;
