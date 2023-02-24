import { RoleProvider } from "@/context/rolte";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RoleProvider>
      <Component {...pageProps} />
    </RoleProvider>
  );
}
