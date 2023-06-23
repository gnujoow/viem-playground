import { useQuery } from "@tanstack/react-query";
import { publicClient } from "../vendor/viem";
import { Hash } from "viem";

/**
 * Public Actions
 */

/**
 * Account
 */
export const useBalance = (address: Hash) => {
  return useQuery({
    queryKey: ["balance", address],
    queryFn: async () => {
      return await publicClient.getBalance({ address });
    },
  });
};

export const useTransactionCount = (address: Hash) => {
  return useQuery({
    queryKey: ["transactionCount", address],
    queryFn: async () => {
      return await publicClient.getTransactionCount({ address });
    },
  });
};

/**
 * block
 */
export const useBlock = (blockHash?: Hash) => {
  return useQuery({
    queryKey: ["blochHash", blockHash],
    queryFn: async () => {
      return await publicClient.getBlock({ blockHash });
    },
  });
};

export const useBlockNumber = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await publicClient.getBlockNumber();
    },
  });
};

export const useBlockTransactionCount = (blockHash?: Hash) => {
  return useQuery({
    queryKey: ["blockTransactionCount", blockHash],
    queryFn: async () => {
      return await publicClient.getBlockTransactionCount({ blockHash });
    },
  });
};

/**
 * Chain
 */

export const useChainId = () => {
  return useQuery({
    queryKey: ["chainId"],
    queryFn: async () => {
      return await publicClient.getChainId();
    },
  });
};
