import {
  scrollSepolia
} from 'wagmi/chains';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'c59e86f04bdb6a22343b9337956b2368',
  chains: [scrollSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
