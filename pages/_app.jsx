import React from "react";
import Web3ModalProvider from "../app/contexts/Web3ModalProvider";
import { BlockchainProvider } from "../app/contexts/BlockchainProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ModalProvider>
      <BlockchainProvider>
        <Component {...pageProps} />
      </BlockchainProvider>
    </Web3ModalProvider>
  );
}

export default MyApp;
