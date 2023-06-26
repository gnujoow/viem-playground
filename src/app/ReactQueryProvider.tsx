import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "./vendor/wagmi";
import { WagmiConfig } from "wagmi";

const queryClient = new QueryClient();

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    </QueryClientProvider>
  );
};
