import { useState } from "react";
import styles from "./Product.module.css";
import ItemModel from "../modal/ItemModel";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../redux/cartSlice";

function Product({ product }) {
  
  const [showModal, setShowModal] = useState(false);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const dispatch = useDispatch();

  // FIX IMG URL FROM API
  const img = product.images[0]
    .replaceAll("\\", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll('"', "");

  function addProduct() {
    dispatch(addItem(product));
    setIsProductAdded(true);
  }

  function deleteProduct() {
    dispatch(deleteItem(product));
    setIsProductAdded(false);
  }
  return (
    <>
      <div className={styles.product}>
        <div className={styles.img_box}>
          <img src={img} alt="product img" />
          <div className={styles.more}>
            {!isProductAdded ? (
              <span className={styles.add} onClick={addProduct}>
                +
              </span>
            ) : (
              <span className={styles.add} onClick={deleteProduct}>
                -
              </span>
            )}
            <span className={styles.info} onClick={() => setShowModal(true)}>
              more..
            </span>
          </div>
        </div>
        <h4>{product.title}</h4>
        <div className={styles.price}>
          <p>${product.price} </p>
          <span className={styles.disc}>-10%</span>
        </div>
      </div>
      {showModal && (
        <ItemModel setShowModal={setShowModal} product={product} img={img} />
      )}
    </>
  );
}

export default Product;
