import Brands from "../../components/brands/Brands";
import Hero from "../../components/hero/Hero";
import ProductsList from "../../components/products-list/ProductsList";

function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <ProductsList />
    </div>
  );
}

export default Home;
