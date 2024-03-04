import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/productsSlice";
import Product from "./Product";
import Loading from "../../UI/Loading";

// CAROUSEL RESPONSIVE
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function ProductsList() {
  // GET DATA FROM REDUX
  const { products, isLoading } = useSelector((state) => state.products);

  // IF DATA WASN'T FETCHED YET
  if (isLoading) return <Loading />;
  
  return (
    <section className={styles.products_list}>
      {products && (
        <Carousel
          slidesToSlide={1}
          draggable={true}
          infinite={true}
          swipeable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((item) => {
            return <Product product={item} />;
          })}
        </Carousel>
      )}
    </section>
  );
}

export default ProductsList;
