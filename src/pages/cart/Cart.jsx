import { useSelector } from "react-redux";
import CartItem from "../../components/cart/CartItem";
import styles from "./Cart.module.css";
function Cart() {

  // GET CART PRODUCT FROM REDUX
  const { cart } = useSelector((state) => state.cart);

// PRODUCTS PRICES
  const subtotal = cart.reduce((acc, crr) => acc + crr.price, 0);
  const discount = 10;

  // TOTAL PRICE + DISCOUNT
  const total = subtotal - (subtotal * discount) / 100;
  

  return (
    <section>
      <div>
        <h3>Your Cart</h3>
        <div className={styles.cart_content}>
          <div className={styles.cart_products}>
            {cart.length >= 1 ? (
              cart.map((item) => {
                return <CartItem product={item} />;
              })
            ) : (
              <p>You should add products first!</p>
            )}
          </div>
          <div className={styles.order_summary}>
            <h4>Order Summary</h4>

            <div>
              <p>
                <span>Subtotal</span>
                {subtotal}$
              </p>
              <p>
                <span>Discount</span>
                {discount}%
              </p>
              <p className={styles.total}>
                <span>Total</span>
                {total}$
              </p>
            </div>
            <button className="btn" disabled={cart.length === 0}>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
