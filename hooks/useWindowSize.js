import { useEffect, useState } from "react";

function useWindowSize(query) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [match, setMatch] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < query) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [windowSize, query]);

  return match;
}

export default useWindowSize;
