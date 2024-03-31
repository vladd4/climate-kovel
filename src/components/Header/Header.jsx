import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";
import Burger from "./Burger";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerClicked } from "../../redux/slices/formSlice";

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

const Header = () => {
  const dispatch = useDispatch();
  const formSlice = useSelector((state) => state.form);

  const handleBurgerClick = () => {
    if (formSlice.isBurgerClicked) {
      dispatch(setBurgerClicked(false));
      document.body.style.overflowY = "scroll";
    } else {
      dispatch(setBurgerClicked(true));
      document.body.style.overflowY = "hidden";
    }
  };
  return (
    <>
      <header className={styles.root}>
        <article className={styles.wrapper}>
          <img alt="Logo" src={Logo} />
          <nav>
            {nav_links.map((link) => {
              return (
                <AnchorLink key={link.href} href={link.href}>
                  {link.label}
                </AnchorLink>
              );
            })}
          </nav>
          <div
            className={`${styles.hamburger} ${
              formSlice.isBurgerClicked ? styles.hamburger_clicked : ""
            }`}
            onClick={handleBurgerClick}
          >
            <span className={styles.span_1}></span>
            <span className={styles.span_2}></span>
            <span className={styles.span_3}></span>
          </div>
        </article>
      </header>
      <Burger />
    </>
  );
};

export default Header;
