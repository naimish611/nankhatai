import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
