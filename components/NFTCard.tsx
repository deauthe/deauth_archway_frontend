import Link from "next/link";
import React from "react";

type Props = {
	tokenId: string;
};

function NFTCard({ tokenId }: Props) {
	const totalFraction = 100;
	const availableFraction = 30;
	const price = 0.001;

	return (
		<div className="card rounded-lg shadow-md  bg-gradient-conic from-primary to-black text-primary-content ">
			<figure>
				<img src={`default.jpg`} alt="NFT" />
			</figure>
			<div className="card-title mx-auto my-1 uppercase tracking-tighter font-bold">
				Mega Monké
			</div>
			<hr />

			{/* body  */}
			<div className="flex flex-col gap-3 p-3">
				<div className="flex flex-col items-center md:mx-5 mx-2">
					{/* description  */}
					<div className="text-xs text-primary-content/50">description</div>
					<div className="text-sm text-primary-content/80 text-center">
						hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo hoo
						hoo
					</div>
				</div>
				<hr />
				<div className="flex flex-col justify-start gap-2 my-1 font-extralight tracking-tight lg:w-2/3 items-center mx-auto">
					<div className="flex flex-row gap-1 bg-secondary rounded-md px-2 items-center text-sm justify-between border-[1px]">
						total fraction
						<div className="badge badge-sm bg-transparent text-primary-content rounded-md">
							{totalFraction}
						</div>
					</div>
					<div className="flex flex-row gap-1 bg-secondary rounded-md px-2 items-center text-sm justify-between border-[1px]">
						available fraction
						<div className="badge badge-sm bg-transparent text-primary-content rounded-md">
							{availableFraction}
						</div>
					</div>
					<progress
						className="progress border-[1px] h-3 border-white bg-black/40 progress-secondary rounded-md"
						value={100 - availableFraction}
						max="100"
					></progress>
					<Link
						href={`/product/${tokenId}`}
						className="btn skeleton bg-primary border-[1px] text-accent-content btn-sm rounded-full shadow-lg"
					>
						buy fractions
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NFTCard;
