// import Image from "next/image";
// import { useContext } from "react";
// import { CartContext } from "../context/Cart";

// import Layout from "@/components/Layout";

// function CartPage() {
//   const { state, dispatch } = useContext(CartContext);
//   const {
//     cart: { cartItems },
//   } = state;
//   function removeItemHandler(item) {
//     dispatch({ type: "REMOVE_ITEM", payload: item });
//   }

//   return (
//     <Layout title="shopping Cart">
//       <h1 className="mb-4 text-xl">shopping cart</h1>
//       {cartItems.length === 0 ? (
//         <div>cart is empty.</div>
//       ) : (
//         <div className="grid md:grid-cols-4 md:gap-5">
//           <div className="overflow-x-auto md:col-span-3 ">
//             <table className="min-w-full">
//               <thead className="border-b">
//                 <tr>
//                   <th className="px-5 text-left">item</th>
//                   <th className="p-5 text-right">quantity</th>
//                   <th className="p-5 text-right">price</th>
//                   <th className="p-5">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.slug} className="border-b">
//                     <td>
//                       <span className="flex items-center">
//                         <Image src={item.image} width={50} height={50} />
//                         {item.title}
//                       </span>
//                     </td>
//                     <td className="p-5 text-right">{item.qty}</td>
//                     <td className="p-5 text-right">{item.price}</td>
//                     <td className="p-5 text-center">
//                       {" "}
//                       <button onClick={() => removeItemHandler(item)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="p-5">
//             <div className="pb-5">
//               Total price:{''}{cartItems.reduce((acc,cur)=>acc+cur.qty*cur.price,0)}
//             </div>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// }
// export default CartPage;
import Image from "next/image";
import { useContext } from "react";
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
            <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CartPage;

