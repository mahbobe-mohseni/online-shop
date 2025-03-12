import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ProductItems from "../../data/Products.json";
import Product from "@/components/Product";
function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;

  const product = ProductItems.find((pItem) => pItem.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <Layout title={product.title}>
       <Product item={product} /> 

      </Layout>
  );
}
export default ProductPage;
