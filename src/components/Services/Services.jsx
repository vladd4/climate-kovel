import styles from "./Services.module.scss";

import Image1 from "../../assets/Rectangle 56.png";
import Image2 from "../../assets/Rectangle 58.png";
import Image3 from "../../assets/Rectangle 60.png";
import Image4 from "../../assets/Rectangle 62.png";
import Image5 from "../../assets/Rectangle 63.png";
import Image6 from "../../assets/Rectangle 57.png";

const services = [
  {
    image: Image1,
    label: "Кондиціонери",
  },
  {
    image: Image6,
    label: "Теплові насоси",
  },
  {
    image: Image5,
    label: "Промислове холодильне обладнання",
  },
  {
    image: Image4,
    label: "Сонячні панелі під ключ",
  },
  {
    image: Image3,
    label: "Рекуператори",
  },
  {
    image: Image2,
    label: "Вентиляція",
  },
];

const Services = () => {
  return (
    <section className={styles.root} id="services">
      <article className={styles.wrapper}>
        <h2>Чим ми займаємось:</h2>
        <div>
          {services.map((item) => {
            return (
              <div key={item.label} className={styles.serv_block}>
                <img alt={item.label} src={item.image} />
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Services;
