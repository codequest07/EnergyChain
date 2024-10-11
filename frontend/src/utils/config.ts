// import {
//   baseSepolia
// } from 'wagmi/chains';

// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// export const config = getDefaultConfig({
//   appName: 'EnergyChain',
//   projectId: 'c59e86f04bdb6a22343b9337956b2368',
//   chains: [baseSepolia],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: false,
  transports: {
    [baseSepolia.id]: http(),
  },
});

// declare module "wagmi" {
//   interface Register {
//     config: ReturnType<typeof getConfig>;
//   }
// }
