import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import styles from "./Faq.module.scss";

import Open from "../../assets/Vector.png";

const faq_info = [
  {
    title: "Які переваги має встановлення кондиціонера?",
    text: "Кондиціонери забезпечують комфортну температуру та вологість повітря в приміщенні, підвищуючи загальний рівень затишку.",
  },
  {
    title: "Якість якого обігрівача краще вибрати для мого приміщення?",
    text: "Якість обігрівача залежить від розміру приміщення та інших факторів. Наші спеціалісти з радістю допоможуть вам обрати найкращий варіант.",
  },
  {
    title: "Які гарантійні умови на ваші продукти?",
    text: "Ми надаємо гарантію на всі наші продукти та послуги. Терміни гарантії можуть варіюватися залежно від типу товару або послуги.",
  },
  {
    title: "Як можу замовити консультацію або отримати додаткову інформацію?",
    text: "Ви можете зв'язатися з нами за допомогою форми на сайті, телефону або електронної пошти. Наші спеціалісти будуть раді допомогти вам з усіма питаннями.",
  },
  {
    title: "Які переваги використання сонячних панелей?",
    text: "Сонячні панелі дозволяють економити на рахунках за електроенергію та допомагають зменшити вплив на довкілля шляхом використання відновлювального джерела енергії.",
  },
];

const Faq = () => {
  return (
    <section className={styles.root} id="faq">
      <article className={styles.wrapper}>
        <h4>Часті запитання:</h4>
        <Accordion className={styles.accordion}>
          {faq_info.map((info) => {
            return (
              <AccordionItem key={info.title}>
                <AccordionHeader>
                  <h4 className={`accordion-title`}>
                    {faq_info.indexOf(info) + 1}. {info.title}
                  </h4>
                  <img alt="Close" src={Open} width={25} height={25} />
                </AccordionHeader>
                <AccordionBody>
                  <div className="accordion-body">{info.text}</div>
                </AccordionBody>
              </AccordionItem>
            );
          })}
        </Accordion>
      </article>
    </section>
  );
};

export default Faq;
