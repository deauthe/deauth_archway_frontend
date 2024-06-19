"use client";
import React, { useState } from "react";

type Props = {};

function Page({}: Props) {
	const fraction_already_bought = 60;
	const NFT_name = "monkey monk";
	const description = "this is a monkey monk NFT";
	const price = "100 ARCH";

	const [fractionsToBuy, setFractionsToBuy] = useState<number>(0);
	const [fractionError, setFractionError] = useState<string>();
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);

		if (value < 100 - fraction_already_bought && value > 0) {
			setFractionsToBuy(value);
			setFractionError(undefined);
		} else {
			setFractionError(
				"fractions must be less than available fractions and greater than 0"
			);
		}
	};

	return (
		<div className="md:grid grid-cols-4 gap-5 p-5 pt-20 min-h-screen">
			<div className="col-span-3 lg:h-[800px] md:h-[700px] h-screen min-h-96 overflow-y-hidden rounded-xl items-center flex flex-col bg-primary  ">
				<div className="text-2xl text-center uppercase tracking-tighter font-bold">
					{NFT_name}
				</div>
				<img src="/default.jpg" alt="" className="w-full h-full object-cover" />
			</div>

			{/* right side menu  */}
			<div className="cop-span-1 flex flex-col gap-5">
				<div className="flex flex-col gap-1 items-center text-center bg-white/20 rounded-md p-3">
					<div className="text-primary-content/40">description</div>
					<div className="text-sm ">{description}</div>
				</div>
				<div className="flex flex-col gap-5 items-center text-center bg-white/20 rounded-md p-3">
					<label className="label">
						fractions available for buying : {100 - fraction_already_bought}
					</label>
					<progress
						className="progress progress-success w-56 bg-neutral mx-auto"
						value={100 - fraction_already_bought}
						max="100"
					></progress>
				</div>

				<label className="form-control w-full  bg-white/20 rounded-md p-3">
					<div className="label ">
						<span className="label-text-alt text-primary-content">
							Fractions you want to buy
						</span>
					</div>
					<input
						type="number"
						placeholder="example: 5"
						onChange={handleInputChange}
						className="input input-bordered w-full max-w-xs bg-transparent border-primary border-[1px]"
					/>
					<span className="label-text-alt text-primary-content mt-1">
						must be less than available fractions
					</span>
					<p className="text-xs text-secondary">{fractionError}</p>
				</label>

				<div className=""></div>

				<button className="btn btn-primary rounded-full mt-10">
					buy fractions
				</button>

				<div className="text-primary  text-center">
					<h1 className="font-xl">price per fraction</h1>
					<h2 className="font-lg">{price}</h2>
				</div>
			</div>
		</div>
	);
}

export default Page;
