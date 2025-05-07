 import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import db from "@/utils/db";
import Product from "@/models/product";

export default function Home({ products }) {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductItem key={product.slug} item={product} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertToObj), // ✅ should work now
    },
  };
}
