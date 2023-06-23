"use client";
import {
  useBlock,
  useBlockNumber,
  useBlockTransactionCount,
  useChainId,
} from "./queries";
// import { walletClient } from "./vendor/viem";

export default function Home() {
  const { data: blockNumberData } = useBlockNumber();
  const { data: blockData } = useBlock();
  const { data: blockTransactionCountData } = useBlockTransactionCount();
  const { data: chainIdData } = useChainId();

  return (
    <main>
      <div>{blockNumberData?.toString()}</div>
      <div>{blockData?.hash?.toLocaleString()}</div>
      <div>{blockTransactionCountData}</div>
      <div>{chainIdData}</div>
    </main>
  );
}
