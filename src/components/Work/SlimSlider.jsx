import styles from "./Work.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const SlimSlider = ({ images }) => {
  return (
    <Splide
      options={{
        height: 600,
        type: "loop",
        focus: "center",
        drag: true,
        perPage: 1,
        gap: "5%",
        autoplay: true,
        interval: 3500,
        pagination: true,
        arrows: true,
      }}
      className={styles.slider_slim}
    >
      {images
        ? images.map((image, index) => {
            return (
              <SplideSlide key={index} id="slides">
                <div
                  className={styles.image_div}
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SplideSlide>
            );
          })
        : null}
    </Splide>
  );
};

export default SlimSlider;
