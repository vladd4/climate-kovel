import { useEffect } from "react";

const useResize = (setWidth, type, setMobile) => {
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (setWidth !== null && type === "service") {
        if (windowWidth <= 650) {
          setWidth(300);
          setMobile(true);
        } else if (windowWidth <= 750) {
          setWidth(270);
        } else {
          setWidth(370);
        }
      }
      if (setWidth !== null && type === "work") {
        if (windowWidth <= 650) {
          setWidth(400);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth, setMobile, type]);
};
export default useResize;
