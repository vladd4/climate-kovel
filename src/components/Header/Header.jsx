import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";

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
  return (
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
        <div className={styles.hamburger}>
          <span className={styles.span_1}></span>
          <span className={styles.span_2}></span>
          <span className={styles.span_3}></span>
        </div>
      </article>
    </header>
  );
};

export default Header;
