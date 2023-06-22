import { useQuery } from "@tanstack/react-query";
import { client } from "../vendor/viem";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useBlockNumber = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await client.getBlockNumber();
    },
  });
};
