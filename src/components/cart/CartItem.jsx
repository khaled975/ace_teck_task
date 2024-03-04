import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../icons/Icons";
import styles from "./CartItem.module.css";
import { deleteItem } from "../../redux/cartSlice";
function CartItem({ product }) {

  const dispatch = useDispatch();

  // FIX IMG URL FROM API
  const img = product.images[0]
    .replaceAll("\\", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll('"', "");
  return (
    <li className={styles.li}>
      <div className={styles.img_box}>
        <img src={img} alt="IMG" />
      </div>
      <div className={styles.details}>
        <h4>{product.title}</h4>
        <p>
          <span>size</span>
        </p>
        <p>
          <span>color</span>
        </p>
      </div>
      <div className={styles.action}>
        <span onClick={() => dispatch(deleteItem(product))}>
          <DeleteIcon />
        </span>
      </div>
    </li>
  );
}

export default CartItem;
