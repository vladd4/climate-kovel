import styles from "./Work.module.scss";
import WorkSlider from "./WorkSlider";

import Image1 from "../../assets/work/photo_2024-03-30_13-47-08.jpg";
import Image2 from "../../assets/work/photo_2024-03-30_13-47-10.jpg";
import Image3 from "../../assets/work/photo_2024-03-30_13-47-16.jpg";
import Image4 from "../../assets/work/photo_2024-03-30_13-47-17.jpg";
import Image5 from "../../assets/work/photo_2024-03-30_13-47-21.jpg";
import SlimSlider from "./SlimSlider";

import Slim1 from "../../assets/work/photo_2024-03-30_14-28-45.jpg";
import Slim2 from "../../assets/work/photo_2024-03-30_14-28-48.jpg";
import Slim3 from "../../assets/work/photo_2024-03-30_14-28-51.jpg";
import Slim4 from "../../assets/work/photo_2024-03-30_14-28-52.jpg";
import Slim5 from "../../assets/work/photo_2024-03-30_14-28-58.jpg";
import Slim6 from "../../assets/work/photo_2024-03-30_14-29-02.jpg";
import Slim7 from "../../assets/work/photo_2024-03-30_14-29-03.jpg";
import Slim8 from "../../assets/work/photo_2024-03-30_14-29-09.jpg";

import Slim1_1 from "../../assets/work/photo_2024-03-30_14-32-04.jpg";
import Slim2_1 from "../../assets/work//photo_2024-03-30_14-32-15.jpg";
import Slim3_1 from "../../assets/work/photo_2024-03-30_14-32-17.jpg";
import Slim4_1 from "../../assets/work/photo_2024-03-30_14-32-19.jpg";
import Slim5_1 from "../../assets/work/photo_2024-03-30_14-32-20.jpg";
import Slim6_1 from "../../assets/work/photo_2024-03-30_14-32-22.jpg";
import Slim7_1 from "../../assets/work/photo_2024-03-30_14-32-25.jpg";
import Slim8_1 from "../../assets/work/photo_2024-03-30_14-32-29.jpg";
import Slim9_1 from "../../assets/work/photo_2024-03-30_14-32-33.jpg";
import Slim10_1 from "../../assets/work/photo_2024-03-30_14-32-35.jpg";

import Image6 from "../../assets/work/photo_2024-03-30_14-35-45.jpg";
import Image7 from "../../assets/work/photo_2024-03-30_14-35-55.jpg";
import Image8 from "../../assets/work/photo_2024-03-30_14-35-57.jpg";
import Image9 from "../../assets/work/photo_2024-03-30_14-36-00.jpg";
import Image10 from "../../assets/work/photo_2024-03-30_14-36-06.jpg";
import Image11 from "../../assets/work/photo_2024-03-30_14-36-27.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];
const images2 = [Image6, Image7, Image8, Image9, Image10, Image11];

const slim_1 = [Slim1, Slim2, Slim3, Slim4];
const slim_2 = [Slim5, Slim6, Slim7, Slim8];

const slim_1_1 = [Slim1_1, Slim2_1, Slim3_1, Slim4_1, Slim5_1];
const slim_2_1 = [Slim6_1, Slim7_1, Slim8_1, Slim9_1, Slim10_1];

const Work = () => {
  return (
    <section className={styles.root} id="work">
      <article className={styles.wrapper}>
        <div className={styles.text_block}>
          <h4>Результат нашої роботи:</h4>
          <p>
            Ми пишаємося нашими досягненнями та відкриті до демонстрації
            результатів нашої роботи.
          </p>
        </div>
        <div className={styles.slider_row}>
          <WorkSlider images={images} />
          <div className={styles.slim}>
            <SlimSlider images={slim_1} />
            <SlimSlider images={slim_2} />
          </div>
        </div>
        <div className={styles.slider_row_2}>
          <div className={styles.slim}>
            <SlimSlider images={slim_1_1} />
            <SlimSlider images={slim_2_1} />
          </div>
          <WorkSlider images={images2} />
        </div>
        <div className={styles.mobile_block}>
          <WorkSlider images={images} />
          <WorkSlider images={slim_1} />
          <WorkSlider images={slim_2} />
          <WorkSlider images={slim_1_1} />
          <WorkSlider images={slim_2_1} />
          <WorkSlider images={images2} />
        </div>
      </article>
    </section>
  );
};

export default Work;
