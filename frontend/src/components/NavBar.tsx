import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBarr() {
  return (
    <header className="bg-black flex justify-between fixed top-0 w-full z-10 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">DenLink</h1>
      </div>

      <div>
        <ConnectButton />
      </div>
    </header>
  );
}
