import {
  BrandFiveIcon,
  BrandFourIcon,
  BrandOneIcon,
  BrandThreeIcon,
  BrandTwoIcon,
} from "../../icons/Icons";
import styles from "./Brands.module.css";

const brands = [
  <BrandOneIcon />,
  <BrandTwoIcon />,
  <BrandThreeIcon />,
  <BrandFourIcon />,
  <BrandFiveIcon />,
];
function Brands() {
  return (
    <section className={styles.brands_sec}>
      <ul className={styles.box}>
        {brands.map((logo) => {
          return <li>{logo}</li>;
        })}
      </ul>
    </section>
  );
}

export default Brands;
