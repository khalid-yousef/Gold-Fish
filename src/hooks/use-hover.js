import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const animation = useAnimation();

  const CategoryIsHover = () => {
    setIsHover(true);
  };
  const CategoryIsNotHover = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (isHover) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.5,
        },
      });
    } else {
      animation.start({
        y: 100,
        opacity: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.5,
        },
      });
    }
  }, [isHover, animation]);
  return { animation, CategoryIsHover, CategoryIsNotHover };
};

export default useHover;
