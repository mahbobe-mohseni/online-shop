import "@/styles/globals.css";
import { CartContextProvider } from "../context/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
export default MyApp;
