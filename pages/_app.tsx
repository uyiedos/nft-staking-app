import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Pulsechain } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={ Pulsechain } 
      clientId="3ddba2d53cc78fd3d4979f2c31cd238b" // You can get a client id from dashboard settings
    >
        <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp;
