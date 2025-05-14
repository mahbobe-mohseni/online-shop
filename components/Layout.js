import Head from "next/head";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { Footer } from "./Footer";
function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <ToastContainer position="bottom-center" limit={100}></ToastContainer>

      <div className="flex min-h-screen flex-col justify-between">
        {/* Navbar (Client Component) */}
        <Navbar />

        {/* Main Content */}
        <main className="p-4">{children}</main>
        

        {/* Footer */}
     
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
