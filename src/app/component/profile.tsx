"use client";

import { useAccount, useConnect, useEnsName } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const Profile = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({});

  const connector = new MetaMaskConnector();

  if (isConnected) return <div>Connected to {ensName ?? address}</div>;
  return (
    <button
      onClick={() =>
        connect({
          connector,
        })
      }
    >
      Connect Wallet
    </button>
  );
};

export default Profile;
