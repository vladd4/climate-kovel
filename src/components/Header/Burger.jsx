import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setBurgerClicked,
  setClickedAlert,
} from "../../redux/slices/formSlice";

const nav_links = [
  {
    label: "Послуги",
    href: "#services",
  },
  {
    label: "Чому обирати нас",
    href: "#benefits",
  },
  {
    label: "Галерея",
    href: "#work",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Консультація",
    href: "#form",
  },
  {
    label: "Контакти",
    href: "#contact",
  },
];

const Burger = () => {
  const dispatch = useDispatch();
  const formSlice = useSelector((state) => state.form);
  return (
    <section
      className={`${styles.burger_root} ${
        formSlice.isBurgerClicked ? styles.burger_show : ""
      }`}
    >
      <article className={styles.burger_wrapper}>
        <nav>
          {nav_links.map((link) => {
            return (
              <AnchorLink
                key={link.href}
                href={link.href}
                onClick={() => {
                  dispatch(setBurgerClicked(false));
                  document.body.style.overflowY = "scroll";
                }}
              >
                {link.label}
              </AnchorLink>
            );
          })}
        </nav>
        <button
          onClick={() => {
            dispatch(setClickedAlert(true));
          }}
        >
          Замовити консультацію
        </button>
      </article>
    </section>
  );
};

export default Burger;
