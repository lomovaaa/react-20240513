import { useCallback, useState } from "react";

export const useCount = (min = 0, max = 5) => {
  const [counter, setCounter] = useState(min);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter < max ? prevCounter + 1 : prevCounter);
  }, [max]);

  const decrement = useCallback(() => {
    setCounter((prevCounter) => (prevCounter > min ? prevCounter - 1 : prevCounter));
  }, [min]);

  return { counter, increment, decrement };
};
