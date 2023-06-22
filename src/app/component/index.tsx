"use client";
import { createPublicClient, http } from "viem";
import { goerli } from "viem/chains";

const MainPageComponent = () => {
  const blockNumber = await client.getBlockNumber();

  return <div></div>;
};

export default MainPageComponent;
