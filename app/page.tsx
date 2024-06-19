"use client";
import Hero from "@/components/Hero";
import MarketPlaceContainer from "@/components/MarketPlace/Container";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<Hero />
			<MarketPlaceContainer />
		</main>
	);
}
