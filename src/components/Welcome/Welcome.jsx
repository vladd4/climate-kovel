import styles from "./Welcome.module.scss";

import Image from "../../assets/air-conditioner.png";
import { useDispatch } from "react-redux";
import { setClickedAlert } from "../../redux/slices/formSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.text_block}>
          <h1>Створіть ідеальний клімат у вашому житті.</h1>
          <p>
            Ми пропонуємо лише оригінальну продукцію з офіційною гарантією та
            післягарантійним сервісом по всій Україні.
          </p>
          <button onClick={() => dispatch(setClickedAlert(true))}>
            Замовити консультацію
          </button>
        </div>
        <img alt="Conditioner" src={Image} />
      </article>
    </section>
  );
};

export default Welcome;
