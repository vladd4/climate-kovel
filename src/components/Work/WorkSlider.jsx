import styles from "./Work.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useState } from "react";
import useResize from "../../hooks/useResize";

const WorkSlider = ({ images }) => {
  const [width, setWidth] = useState(600);
  useResize(setWidth, "work");
  return (
    <Splide
      options={{
        height: width,
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
      className={styles.slider}
    >
      {images
        ? images.map((image, index) => {
            return (
              <SplideSlide key={index} id="slides">
                <div
                  className={styles.image_div}
                  style={{ backgroundImage: `url(${image})` }}
                />
                {/* <img alt={image} src={image} /> */}
              </SplideSlide>
            );
          })
        : null}
    </Splide>
  );
};

export default WorkSlider;
