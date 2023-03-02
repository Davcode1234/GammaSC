import { useEffect, useState } from "react";

const useScroll = () => {
  const [dir, setDir] = useState(null);

  useEffect(() => {
    let initialVal = window.scrollY;

    const updateScrollDir = () => {
      const currentVal = window.scrollY;
      const direction = currentVal > initialVal ? "down" : "up";

      if (
        direction !== dir &&
        (currentVal - initialVal > 5 || currentVal - initialVal < -5)
      ) {
        setDir(direction);
      } else if (currentVal === 0) {
        setDir("up");
      }
      initialVal = currentVal > 0 ? currentVal : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => {
      window.removeEventListener("scroll", updateScrollDir);
    };
  }, [dir]);
  return dir;
};

export default useScroll;
