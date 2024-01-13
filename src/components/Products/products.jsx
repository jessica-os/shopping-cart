import { useEffect, useContext } from "react";
import "./products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/productCard";
import Loading from "../Loading/loading";
import AppContext from "../../context/AppContext";

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
