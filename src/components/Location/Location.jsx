import styles from "./Location.module.scss";

import Image from "../../assets/photo_2024-03-30_13-28-20.jpg";
import Map from "../../assets/map.png";

const Location = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <img alt="Location" src={Image} />
        <div className={styles.text_block}>
          <h3>Де нас знайти:</h3>
          <p>
            Завітайте до нас за адресою що розташована в самому центрі Ковеля.
            Зручне розташування поруч з дорогою забезпечить легкий доступ для
            наших клієнтів. Очікуємо вашого візиту!
          </p>
          <div className={styles.location}>
            <img alt="Map" src={Map} />
            <p>м.Ковель вулиця Сагайдачного 4а</p>
          </div>
          <a
            href="https://maps.app.goo.gl/9mKFuieyY4MkEe9FA"
            target="_blank"
            rel="noreferrer"
          >
            Знайти нас на карті
          </a>
        </div>
      </article>
    </section>
  );
};

export default Location;
