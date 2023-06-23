import { createWalletClient, createPublicClient, http, custom } from "viem";
import { goerli } from "viem/chains";

/**
 * public client
 */
export const publicClient = createPublicClient({
  chain: goerli,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: goerli,
  transport: custom((window as any).ethereum),
});
