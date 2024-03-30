import styles from "./Benefits.module.scss";

import IconBlue from "../../assets/icon-blue.png";
import IconRed from "../../assets/icon-red.png";

const circles = [
  {
    label: "Консультація",
    icon: IconBlue,
    text: "На початковому етапі ми проводимо консультацію, спрямовану на виявлення потреб клієнта та надання найкращих рішень.",
    align: "left",
  },
  {
    label: "Асортимент",
    icon: IconRed,
    text: "Широкий вибір кондиціонерів різних моделей, потужностей та дизайнів для вибору найбільш підходящого варіанту.",
    align: "right",
  },
  {
    label: "Сервіс",
    icon: IconBlue,
    text: "Наша компанія надає офіційну гарантію від виробника, а також гарантує якість виконаних робіт. Ми також забезпечуємо обслуговування в майбутньому, гарантуючи безперебійну роботу вашої системи.",
    align: "left",
  },
  {
    label: "Монтаж",
    icon: IconRed,
    text: "Ми здійснюємо безкоштовний виїзд на об'єкт для огляду та оцінки вартості монтажних робіт, щоб забезпечити вам максимальний комфорт і ефективність системи.",
    align: "right",
  },
  {
    label: "Енергоефективність",
    icon: IconBlue,
    text: "Ми використовуємо продукцію, яка ефективно використовує енергію, зменшуючи витрати на оплату комунальних послуг.",
    align: "left",
  },
  {
    label: "Підтримка 24/7",
    icon: IconRed,
    text: "Наша команда завжди на зв'язку, готова відповісти на всі ваші запитання та надати необхідну допомогу щодо встановлення та експлуатації кондиціонеру.",
    align: "right",
  },
];

const Benefits = () => {
  return (
    <section className={styles.root} id="benefits">
      <article className={styles.wrapper}>
        <h2>Що ми пропонуємо клієнту:</h2>
        <p>
          Наша компанія пропонує спектр продуктів та послуг, які гарантують
          найвищу якість і задоволення потреб клієнтів.
        </p>
        <div className={styles.circles}>
          {circles.map((item) => {
            return (
              <div
                key={item.label}
                className={item.align === "right" ? styles.right : styles.left}
              >
                <div className={styles.circle}>
                  <img alt="Icon" src={item.icon} />
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Benefits;
