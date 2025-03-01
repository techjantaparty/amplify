"use client";

import React from "react";
import WalletConnectButton from "./WalletConnectButton";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B]">
      {/*<DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />*/}
      <section className="container pt-36 mx-auto px-4 py-20 text-center">
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
