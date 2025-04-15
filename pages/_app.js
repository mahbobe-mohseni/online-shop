// import "@/styles/globals.css";
// import { CartContextProvider } from "../context/Cart";

// function MyApp({ Component, pageProps }) {
//   return (
//     <CartContextProvider>
//       <Component {...pageProps} />
//     </CartContextProvider>
//   );
// }
// export default MyApp;


import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartContextProvider } from "../context/Cart";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SessionProvider>
  );
}

export default MyApp;

