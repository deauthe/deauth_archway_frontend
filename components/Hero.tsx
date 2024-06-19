import React from "react";
import { connectKeplrWallet } from "@/lib/connectWallet";
import ConnectWallet from "./ConnectWallet";

type Props = {};

function Hero({}: Props) {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: "url(bg-default.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-20"></div>
			<div className="hero-content text-center text-primary-content">
				<div className="max-w-md bg-gradient-conic from-black/90 to-secondary rounded-full size-fit p-20 bg-opacity-20">
					<h1 className="mb-5 text-5xl font-bold tracking-tighter uppercase">
						Get your chunk now{" "}
					</h1>
					<p className="mb-5">
						{`Don't want to go all in but still want to get in on the action?`}
					</p>
					<p className="mb-5">
						{`We've got you! get a fraction of your favourite NFTs and reap the
						benefits when they blow up`}
					</p>
					<p className="mb-5">
						See real world value of your NFTs as it gets converted to physical
						merch, and the value gets updated with everyt sale
					</p>
					<ConnectWallet />
				</div>
			</div>
		</div>
	);
}

export default Hero;
