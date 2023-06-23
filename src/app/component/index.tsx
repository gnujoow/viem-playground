"use client";
import { createPublicClient, http } from "viem";
import { goerli } from "viem/chains";
import { client } from "../vendor/viem";

const MainPageComponent = () => {
  const blockNumber = await client.getBlockNumber();

  return <div></div>;
};

export default MainPageComponent;
