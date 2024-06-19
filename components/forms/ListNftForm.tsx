"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
// import { create as ipfsHttpClient } from "ipfs-http-client";
const projectId = "2ONjCGu7UlrPOzmZ3hqy8WlN2GC";
const projectSecretKey = "43cc6a424bd74fd70d8a175972fbba87";

const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
	"base64"
)}`;

console.log(auth);
const subdomain = "https://uniqo-marketplace.infura-ipfs.io";

console.log(subdomain);
// const client = ipfsHttpClient({
// 	host: "infura-ipfs.io",
// 	port: 5001,
// 	protocol: "https",
// 	headers: {
// 		authorization: auth,
// 	},
// });

type Props = {};

export interface ListNftFormData {
	price: string;
	image: File;
	imageLink: string;
	name: string;
	collection: string;
	contract: string;
	description: string;
	artistName: string;
	totalFractions: 100 | number;
	fractionsOwned: 20 | number;
}

function ListNftForm({}: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<ListNftFormData>();

	//@ts-ignore
	const uploadToIPFS = async () => {
		const file = getValues("image");
		if (typeof file !== "undefined") {
			try {
				// const result = await client.add(file);
				// console.log("this is result", result);
				// setValue("imageLink", `${subdomain}/ipfs/${result.path}`);
				// console.log("image", getValues("image"));
				// console.log(`${subdomain}/ipfs/${result.path}`);
			} catch (error) {
				console.log("ipfs image upload error: ", error);
			}
		}
	};

	const [submitted, setSubmitted] = useState<
		"success" | "failed" | undefined
	>();

	const onSubmit: SubmitHandler<ListNftFormData> = async (data) => {
		setSubmitted("success");
		setTimeout(() => setSubmitted(undefined), 3000);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full">
			<div className="flex flex-col gap-4 w-full text-secondary-content mx-auto items-center ">
				<div className="flex flex-col md:flex-row gap-10 items-center ">
					<div className="flex flex-col gap-3 items-center">
						<input
							className="rounded-full w-fit file-input-bordered file-input file:bg-accent file:h-full file:rounded-full file:cursor-pointer p-0 mx-auto bg-primary"
							type="file"
							{...register("image")}
						/>
					</div>
				</div>

				{/* NFT description  */}
				<div className="flex flex-col gap-3  w-full items-center">
					<h1 className="font-heading1 text-2xl font-bold tracking-tighter uppercase">
						Nft Description
					</h1>
					<div className="flex flex-col gap-1 ">
						<label className="text-xs text-white/40 font-bold ml-3">
							NFT Name
						</label>
						<input
							className="rounded-full  input input-bordered placeholder:text-neutral-content text-neutral-content"
							{...register("name", {
								required: "Client Name is required",
							})}
						/>
						{errors.name && <span>{errors.name.message}</span>}
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs text-white/40 font-bold ml-3">
							Price
						</label>
						<input
							className="rounded-full input input-bordered placeholder:text-neutral-content text-neutral-content"
							{...register("price", {
								required: "Artist Name is required",
							})}
						/>
						{errors.price && <span>{errors.price.message}</span>}
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs text-white/40 font-bold ">
							Client Description
						</label>
						<textarea
							className="rounded-3xl  textarea textarea-bordered textarea-primary placeholder:text-neutral text-neutral-content"
							placeholder="this nft is awesome"
							{...register("description", {
								required: "Client Description is required",
							})}
						/>
						{errors.description && <span>{errors.description.message}</span>}
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs text-white/40 font-bold ml-3">
							Total Fractions
						</label>
						<input
							className="rounded-full  input input-bordered placeholder:text-neutral-content text-neutral-content"
							{...register("totalFractions", {
								required: "Client Description is required",
							})}
							defaultValue={100}
						/>
						{errors.totalFractions && (
							<span>{errors.totalFractions.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs text-white/40 font-bold ml-3">
							Fractions owned by you
						</label>
						<input
							className="rounded-full  input input-bordered placeholder:text-neutral-content text-neutral-content"
							{...register("fractionsOwned", {
								required: "Client Description is required",
							})}
							defaultValue={20}
						/>
						{errors.fractionsOwned && (
							<span>{errors.fractionsOwned.message}</span>
						)}
					</div>
					<button type="submit" className="btn btn-primary rounded-full btn-lg">
						Mint
					</button>
				</div>

				{/* toast  */}
				{submitted == "success" && (
					<div className="toast">
						<div className="alert alert-primary">
							<span>NFT Listed!</span>
						</div>
					</div>
				)}
				{submitted == "failed" && (
					<div className="toast">
						<div className="alert alert-error">
							<span>error listing NFT </span>
						</div>
					</div>
				)}
			</div>
		</form>
	);
}

export default ListNftForm;
