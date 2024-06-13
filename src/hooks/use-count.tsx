import { useCallback, useState } from "react";

export const useCount = (min = 0, max = 5) => {
  const [count, setCount] = useState(min);

  const increment = useCallback(() => {
    setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
  }, [max]);

  const decrement = useCallback(() => {
    setCount((prevCount) => (prevCount > min ? prevCount - 1 : prevCount));
  }, [min]);

  return { count, increment, decrement, setCount };
};
