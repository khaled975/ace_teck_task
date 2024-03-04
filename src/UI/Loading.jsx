import styles from "./Loading.module.css";
// SPINNER
function Loading() {
  return (
    <div className={styles.spinner_parent}>
      <div class={styles.spinner_3}></div>
    </div>
  );
}

export default Loading;
