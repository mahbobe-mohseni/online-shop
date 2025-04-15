 
import Image from "next/image";
import Router from "next/router";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { CartContext } from "../context/Cart";
import Layout from "@/components/Layout";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const {
    cart: { cartItems },
  } = state;

   function removeItemHandler(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  className="rounded-lg border border-gray-300"
                  alt={item.title}
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                </div>
                <button
                  onClick={() => removeItemHandler(item)}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Order Summary</h2>
            <p className="text-gray-600 text-md">
              Total Price: <span className="font-semibold">${cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}</span>
            </p>
            <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={()=>rouer.push('login?redirect=/shipping')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default  dynamic(()=>Promise.resolve(CartPage),{ssr:false });

