import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

const useFlipped = (ref) => {
  const componentIsInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (componentIsInView) {
      animation.start({
        rotateY: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "tween",
          ease: "linear",
        },
      });
    } else {
      animation.start({
        rotateY: 90,
        opacity: 0,
        transition: {
          duration: 0,
          type: "tween",
          ease: "linear",
        },
      });
    }
  }, [componentIsInView, animation]);
  return { animation };
};

export default useFlipped;
