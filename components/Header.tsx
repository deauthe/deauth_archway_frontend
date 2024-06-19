"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Header = () => {
	const [show, setShow] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	const controlNavbar = () => {
		if (window.scrollY >= 40) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<div
			className={` w-full h-[50px] items-center md:h-[80px]  z-20 fixed  top-0 transition-all duration-500  md:px-5 px-1    `}
		>
			<div
				className={` rounded-full relative ${
					show
						? "bg-primary mt-2 text-primary-content border-primary-content border-[1px]"
						: "bg-transparent mt-1 text-primary-content"
				} items-center w-full flex justify-between transition-all duration-500 md:px-5 px-2 py-1`}
			>
				<div className="flex gap-2 items-center ml-5">
					<Link href="/">
						<div className=" flex items-end gap-2 ">
							{/* <img
							src="/logo.png"
							alt="logo"
							className="w-[40px] md:w-[50px] drop-shadow-lg"
						/> */}
							<p className="md:text-3xl text-xl font-extrabold font-heading1 text-primary-content uppercase">
								Deauth
							</p>
						</div>
					</Link>
				</div>

				<div className="  flex items-center gap-2   ">
					{/* {Button } */}
					<ConnectWallet />
					<Link
						href={"/list-nft"}
						className="btn btn-sm btn-primary rounded-full bordered border-base-100"
					>
						List Your NFT
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
