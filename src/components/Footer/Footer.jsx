import styles from "./Footer.module.scss";

import Logo from "../../assets/logo-footer.png";
import Top from "../../assets/top.png";

import Map from "../../assets/map-icon.png";
import Teleg from "../../assets/telegram-icon.png";
import Phone from "../../assets/phone-icon.png";
import Viber from "../../assets/viber-icon.png";
import Insta from "../../assets/instagram-icon.png";

const Footer = () => {
  return (
    <section className={styles.root} id="contact">
      <article className={styles.wrapper}>
        <div className={styles.contact}>
          <img alt="Logo" src={Logo} />
          <p>Створіть ідеальний клімат у вашому житті.</p>
          <div className={styles.links}>
            <a
              href="https://maps.app.goo.gl/9mKFuieyY4MkEe9FA"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Social" src={Map} />
            </a>
            <a
              href="https://t.me/+380635196998"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Social" src={Teleg} />
            </a>
            <a
              href="viber://contact?number=+380635196998"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Social" src={Viber} />
            </a>
            <a
              href="https://www.instagram.com/climate.kovel/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Social" src={Insta} />
            </a>

            <a href="tel:+380635196998" className={styles.phone}>
              <img alt="Social" src={Phone} />
              <p>+380(63) 519-69-98</p>
            </a>
          </div>
        </div>
      </article>
      <article className={styles.copy}>
        <div>
          <img
            alt="To top"
            src={Top}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <p>Company © 2024 All Rights Reserved</p>
        </div>
      </article>
    </section>
  );
};

export default Footer;
