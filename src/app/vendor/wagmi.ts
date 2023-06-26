import { goerli } from "wagmi/chains";
import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
