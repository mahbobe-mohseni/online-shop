import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CartContextProvider } from "../context/Cart";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </CartContextProvider>
    </SessionProvider>
  );
}
function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/Unauthorized");
    },
  });
  if (status === "loading") {
    return "loading";
  }
  return children;
}

export default MyApp;
