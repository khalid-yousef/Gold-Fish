import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

const useComponentAnimation = (ref, delaySec) => {
  const componentIsInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (componentIsInView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "linear",
          delay: 0.2,
        },
      });
    } else {
      animation.start({
        scale: 0.6,
        opacity: 0.5,
        transition: {
          duration: 0,
          type: "tween",
          ease: "linear",
        },
      });
    }
  }, [componentIsInView, animation, delaySec]);
  return { animation };
};

export default useComponentAnimation;
