import { useRouter } from "next/router";
function products() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>{`products ${router.query.slug}`}</h2>
    </div>
  );
}
export default products;
