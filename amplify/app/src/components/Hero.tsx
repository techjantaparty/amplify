import React from "react";
import WalletConnectButton from "./WalletConnectButton";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B]">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Amplify</div>
      </header>
      <section className="mt-20 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empower Change, Report Truth
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join the decentralized movement to expose injustices and crimes. Your
          voice matters, and it&apos;s secure on the blockchain.
        </p>
        <div className="flex justify-center">
          <WalletConnectButton />
        </div>
      </section>
    </div>
  );
};

export default Hero;
