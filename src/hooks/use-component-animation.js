import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

const useComponentAnimation = (ref, delaySec) => {
  const componentIsInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (componentIsInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.5,
          delay: delaySec,
        },
      });
    } else {
      animation.start({
        y: 50,
        opacity: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.5,
        },
      });
    }
  }, [componentIsInView, animation, delaySec]);
  return { animation };
};

export default useComponentAnimation;
