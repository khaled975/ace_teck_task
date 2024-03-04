import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero_sec}>
      <div className={styles.hero_text}>
        <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="btn">Shop Now</button>
        <div className={styles.statics}>
          <div>
            <h3>200+</h3>
            <p>International Brands</p>
          </div>
          <div>
            <h3>2000,+</h3>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
