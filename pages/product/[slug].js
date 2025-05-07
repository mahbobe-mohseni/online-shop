import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import db from "@/utils/db";
import Product from "@/models/product"; // This is your MongoDB model
import ProductItem from "@/components/ProductItem"; // Renamed component to avoid conflict

function ProductPage({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout title={product.title}>
      <ProductItem item={product} hasRedirect={true} />
    </Layout>
  );
}

export default ProductPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();

  return {
    props: {
      product: product ? db.convertToObj(product) : null, // Note: "converToObj", not "convert"
    },
  };
}
