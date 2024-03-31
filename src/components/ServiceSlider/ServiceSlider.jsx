import styles from "./Slider.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Left from "../../assets/left-button.png";
import Right from "../../assets/right-button.png";
import Slide1 from "../../assets/conditioner.png";
import Slide2 from "../../assets/heat-pump.png";
import Slide3 from "../../assets/fridge.png";
import Slide4 from "../../assets/solar-panels.png";
import Slide5 from "../../assets/recuperation.png";
import Slide6 from "../../assets/ventilation.png";

import { useRef, useState } from "react";
import useResize from "../../hooks/useResize";

const services = [
  {
    image: Slide1,
    label: "Кондиціонери",
    text: "Забезпечте комфорт та свіжість у вашому житлі або бізнесі з нашою послугою. Ми пропонуємо повний спектр робіт, включаючи проектування, монтаж та обслуговування кондиціонерів, щоб забезпечити оптимальний мікроклімат в будь-якому приміщенні. Наші фахівці враховують всі ваші потреби та особливості приміщення, розробляючи оптимальне рішення для вашого комфорту.",
  },
  {
    image: Slide2,
    label: "Теплові насоси",
    text: "Перейдіть на новий рівень комфорту та енергоефективності. Ми пропонуємо повний комплекс робіт, включаючи проектування, монтаж та обслуговування теплових насосів, щоб забезпечити ефективне та екологічно чисте опалення та охолодження вашого приміщення. Теплові насоси використовують відновлювальні джерела енергії, такі як повітря, ґрунт або вода, що дозволяє зменшити викиди CO2 та вартість опалення.",
  },
  {
    image: Slide3,
    label: "Холодильне обладнання",
    text: "Забезпечте надійне та ефективне зберігання продуктів та сировини. Ми пропонуємо повний комплекс робіт, включаючи проектування, постачання, монтаж та обслуговування промислових холодильних систем, щоб забезпечити вашому бізнесу найвищу якість. Ми розробляємо індивідуальні рішення для кожного клієнта, враховуючи особливості вашого бізнесу та потреби у зберіганні продуктів.",
  },
  {
    image: Slide4,
    label: "Сонячні панелі під ключ",
    text: "Ми пропонуємо повний комплекс послуг з проектування, монтажу та обслуговування сонячних панелей, щоб забезпечити вам ефективність та зручність використання сонячної енергії. Наші фахівці здійснюють детальний аналіз вашого будинку чи комерційного об'єкту, щоб розробити оптимальне рішення для вашої потреби.",
  },
  {
    image: Slide5,
    label: "Рекуператори",
    text: "Підтримуйте здоровий та комфортний внутрішній клімат у вашому житлі чи офісі. Ми пропонуємо повний спектр робіт, включаючи проектування, монтаж та обслуговування рекуператорних систем, щоб забезпечити вам чисте, свіже повітря та енергоефективну вентиляцію. Рекуператори забезпечують ефективне видалення використаного повітря та одночасне подачу свіжого повітря у приміщення, що підвищує комфорт та здоров'я мешканців.",
  },
  {
    image: Slide6,
    label: "Вентиляція",
    text: "Забезпечте своєму приміщенню оптимальний рівень свіжості та комфорту.. Ми пропонуємо повний спектр робіт, включаючи проектування, монтаж та обслуговування вентиляційних систем, щоб забезпечити ефективне видалення забрудненого повітря та подачу свіжого повітря в ваше приміщення. Наші системи вентиляції використовують передові технології, що дозволяють ефективно використовувати енергію та знижувати витрати на опалення та кондиціонування повітря.",
  },
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(370);
  useResize(setWidth, "service", setMobile);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.text_block}>
          <h3>Послуги, які ми надаємо:</h3>
          <p>
            Ми пропонуємо індивідуальний підхід до кожного клієнта, незалежно
            від обсягу проекту.
          </p>
          <div className={styles.arrows}>
            <img
              onClick={() => {
                sliderRef.current?.splide.go("-1");
              }}
              alt="Left arrow"
              src={Left}
            />
            <img
              alt="Right arrow"
              src={Right}
              onClick={() => {
                sliderRef.current?.splide.go("+1");
              }}
            />
          </div>
        </div>
        <Splide
          options={{
            height: width,
            type: "loop",
            focus: "start",
            drag: true,
            perPage: mobile ? 1 : 2,
            gap: "5%",
            autoplay: true,
            interval: 2500,
            pagination: false,
            arrows: false,
          }}
          ref={sliderRef}
          className={styles.slider}
        >
          {services
            ? services.map((service, index) => {
                return (
                  <SplideSlide key={index} id="slides">
                    <div
                      style={{ backgroundImage: `url(${service.image})` }}
                      className={styles.back_img}
                    />

                    <div className={styles.label}>
                      <div>
                        <h5>{service.label}</h5>
                        <p className={styles.hover_p}>{service.text}</p>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })
            : null}
        </Splide>
      </article>
    </section>
  );
};

export default ServiceSlider;
