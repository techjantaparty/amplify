/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserProvider } from "ethers";
import toast from "react-hot-toast";

export const connectWallet = async (
  setIsConnected: any,
  setUserAddress: any,
  setSigner: any
) => {
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
