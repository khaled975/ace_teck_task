import { useSelector } from "react-redux";
import { CartIcon, SearchIcon, UserIcon } from "../../icons/Icons";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  // GET CART PRODUCTS LENGTH
  const { cart } = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>SHOP.CO</h1>
      </Link>
      <ul>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className={styles.control_input}>
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input type="search" id="search" placeholder="Search for products.." />
      </div>
      <div className={styles.nav_icons}>
        <div className={styles.cart_icon} onClick={() => navigate("/cart")}>
          <CartIcon />
          <span className={styles.num}>{cart.length || 0}</span>
        </div>
        <UserIcon />
      </div>
    </header>
  );
}

export default Navbar;
