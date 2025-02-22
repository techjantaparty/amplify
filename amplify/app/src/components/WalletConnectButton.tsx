/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import toast from "react-hot-toast";
import { BrowserProvider } from "ethers";
import { WalletContext } from "@/context/Wallet";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";

declare global {
  interface Window {
    ethereum: any;
  }
}

const WalletConnectButton = () => {
  const {
    setIsConnected,
    setUserAddress,
    setSigner,
    isConnected,
    userAddress,
  } = useContext(WalletContext);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("Wallet Not Found");
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);

      const accounts = await provider.send("eth_requestAccounts", []);
      setUserAddress(accounts[0]);
      setIsConnected(true);

      const { chainId } = await provider.getNetwork();
      const sepoliaNetworkId = "43113";

      if (chainId.toString() !== sepoliaNetworkId) {
        toast.error("Please Switch To Fuji Network");
      } else {
        toast.success("Wallet Connected");
      }
    } catch (error) {
      toast.error("Error In Connecting Wallet");
      console.error("Connection error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <PrimaryButton disabled={isConnected} onClick={connectWallet}>
        {userAddress
          ? `${userAddress.slice(0, 12)}...${userAddress.slice(-13)}`
          : "Connect Wallet"}
      </PrimaryButton>
      {isConnected && userAddress && (
        <Link href={"/home"}>
          <SecondaryButton className="w-full">Raise Voice</SecondaryButton>
        </Link>
      )}
    </div>
  );
};

export default WalletConnectButton;
