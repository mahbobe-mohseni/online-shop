import Link from "next/link";
import { useContext } from "react";
import ProductItems from '../data/Products.js'
import{CartContext} from '../context/Cart'


const { state, dispatch } = useContext(CartContext);
function Product({ item }) {


 const { query } = useRouter();
  const { slug } = query;

  const product = ProductItems.find((pItem) => pItem.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }


  function addTocartHander(){
   const existingItem= state.cart.cartItems.find((item)=>item.slug===product.slug)

const qty=existingItem? existingItem.qty+1:1

dispatch({type:'ADD_TO_CART',payload:{...product,qty}})

  }
  return (
    <div className="max-w-sm bg-gray-100 text-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-300">
      <Link href={`/product/${item.slug}`}>
        <img
          className="w-full rounded-t-xl"
          src={item.image}
          alt={item.title}
        />
      </Link>
      <div className="p-5">
        <Link href={`/product/${item.slug}`}>
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        </Link>
        <p className="text-gray-600 text-base mb-4">{item.description}</p>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          ${item.price}
        </p>
        <div className="mb-2 font-bold ">{item.count > 0 ? "Available" : "unavailable"}</div>
        <button onClick={addTocartHander} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
