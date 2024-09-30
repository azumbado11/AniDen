import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 400) => {
  /* store a value after delay */
  const [debouncedValue, setDebouncedValue] = useState(value);

  /* effect that create new intervals if  */
  useEffect(() => {
    /* timeout that after the delay, will set the debouncedValue the new value */
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    /* if another render happens before the end of the timeout, this will set another timeout */
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
