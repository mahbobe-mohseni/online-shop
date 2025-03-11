import Head from "next/head";
import Navbar from "./Navbar";


import { Footer } from "./Footer";
function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

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
