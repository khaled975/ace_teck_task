import { createPortal } from "react-dom";
import styles from "./ItemModel.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
function ItemModel({ children, setShowModal, product, img }) {
  // FOR DISPATCHING ACTIONS
  const dispatch = useDispatch();

  const ref = useRef();

  //  TO CLOSE MODAL WHEN CLICK ON OUTSIDE OVERLAY
  useEffect(() => {
    function handleHideModal(e) {
      // CHECK IF USER CLICK ON OVERLAY
      if (ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener("click", handleHideModal, true);
    // CLEAN UP USEEFFECT
    return () => {
      document.removeEventListener("click", handleHideModal, true);
    };
  }, [setShowModal]);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <span className={styles.close} onClick={() => setShowModal(false)}>
          &#10005;
        </span>
        <div className={styles.product_details}>
          <div className={styles.product_img}>
            <img src={img} alt="product_img" />
          </div>
          <div className={styles.product_info}>
            <h3>{product.title}</h3>
            <p>
              Category: <span>{product.category.name}</span>
            </p>
            <p>
              Description:<span>{product.description}</span>
            </p>
            <div className={styles.add}>
              <p>
                Price: <span>{product.price}$</span>
              </p>
              <button
                className="btn"
                onClick={() => dispatch(addItem(product))}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default ItemModel;
