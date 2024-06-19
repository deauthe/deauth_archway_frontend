import React from "react";
import { RecoilRootProps } from "recoil";

export function Root({ children }: { children: React.ReactNode }) {
	return <RecoilRootProps> {children} </RecoilRootProps>;
}
