import { SessionProvider } from "next-auth/react";
import { Archivo } from "@next/font/google";

import "../styles/globals.css";

const archivo = Archivo({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={archivo.className}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
