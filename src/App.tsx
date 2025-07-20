import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState<string>("");

  const handleMint = async () => {
    try {
      if (!window.keplr) {
        alert("Please install the Keplr wallet extension");
        return;
      }

      // Simulated placeholder while wallet tx logic is wired in
      setStatus("🔄 Connecting to Keplr...");

      // Real wallet connection logic to be implemented next
      // This is where we’ll trigger the popup in the next step

      setStatus("✅ Keplr connected ()");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error occurred");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-2xl shadow-xl bg-white text-center space-y-6">
        <img src="/AccessLayerLogo.png" alt="AccessLayer" className="w-32 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">SoloPass Demo</h1>
        <p className="text-gray-600">Click below to mint a test SoloPass token on Coreum testnet.</p>
        <button
          onClick={handleMint}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Mint SoloPass Token
        </button>
        {status && <p className="text-sm text-gray-500 mt-2">{status}</p>}
      </div>
    </main>
  );
}
