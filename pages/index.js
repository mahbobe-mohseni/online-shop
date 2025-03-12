import Layout from "@/components/Layout";
import Product from "@/components/Product";
 import ProductItems from "../data/Products.json";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {ProductItems.map((product) => (
          <Product key={product.slug} item={product} />
        ))}
      </div>
    </Layout>
  );
}
