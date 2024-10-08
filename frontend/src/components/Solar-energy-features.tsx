import MemoLock from "@/icons/Lock";
import MemoLove from "@/icons/Love";
import MemoSparkle from "@/icons/Sparkle";
import MemoStrike from "@/icons/Strike";

export default function SolarEnergy() {
  return (
    <div className="hsection px-4 my-12 py-8">
      <h1 className="sm:text-4xl text-xl font-bold text-center mb-6">
        Unlock the Power of Solar Energy
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-start space-x-4 p-6">
            <div className="border rounded-md p-1">
              <MemoStrike className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                User-Friendly Platform
              </h2>
              <p className="text-gray-600">
                Experience an intuitive interface designed for seamless energy
                transactions, making energy sharing easy for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="border-0">
          <div className="flex items-start space-x-4 p-6">
            <div className="border rounded-md p-1">
              <MemoSparkle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Real-Time Listings</h2>
              <p className="text-gray-600">
                Browse current energy offers and find the best deals from solar
                panel owners in your area without any delays.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start space-x-4 p-6">
            <div className="border rounded-md p-1">
              <MemoLock className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Secure Transactions
              </h2>
              <p className="text-gray-600">
                Rest assured with blockchain technology that guarantees secure,
                transparent, and quick energy purchases every time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start space-x-4 p-6">
            <div className="border rounded-md p-1">
              <MemoLove className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Community Driven</h2>
              <p className="text-gray-600">
                Join a vibrant community committed to sustainable energy
                practices and support local energy sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
