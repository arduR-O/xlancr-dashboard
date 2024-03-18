import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);

    if (match !== media.matches) {
      setMatch(media.matches);
    }

    const listener = (): void => setMatch(media.matches);
    window.addEventListener("resize", listener);

    return (): void => {
      window.removeEventListener("resize", listener);
    };
  }, [query, match]);

  return match;
};

export default useMediaQuery;