import PrimaryButton from "@/components/PrimaryButton";
import WalletConnectButton from "@/components/WalletConnectButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Amplify</div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empower Change, Report Truth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the decentralized movement to expose injustices and crimes.
            Your voice matters, and it&apos;s secure on the blockchain.
          </p>
          <div className="flex justify-center">
            <WalletConnectButton />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why Choose Amplify?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Decentralized",
                description:
                  "No central authority can censor or manipulate your report",
              },
              {
                title: "Anonymous",
                description:
                  "Protect your identity while speaking out against injustice",
              },
              {
                title: "Immutable",
                description:
                  "Once posted, your reports are permanently stored on the blockchain",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-6">
                {[
                  "Connect your wallet to create an account",
                  "Write your report or upload evidence",
                  "Submit to the blockchain",
                  "Your post is now live and immutable",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-white text-purple-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-xl">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white bg-opacity-20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Join the Movement</h3>
              <p className="text-lg mb-6">
                Be part of a global community dedicated to exposing injustices
                and driving positive change. Your voice can make a difference.
              </p>
              <PrimaryButton>Connect Wallet</PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white border-opacity-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Amplify</h4>
            <p>
              Empowering voices, exposing truths, and driving change through
              decentralized reporting.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "How It Works", "FAQs", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline">
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {["Twitter", "Telegram", "Discord", "GitHub"].map(
                (social, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline">
                      {social}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Amplify. All rights reserved.
        </div>
      </footer>
    </>
  );
}
