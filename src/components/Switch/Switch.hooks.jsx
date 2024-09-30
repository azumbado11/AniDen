import { use, useEffect, useState } from "react";
import { FiltersContext } from "../../Context/FiltersState";

export const useSwitch = () => {
  /* checkbox state */
  const [check, setCheck] = useState(false);

  /* state for media value */
  const { media, setMedia } = use(FiltersContext);

  /* toggle media value if checbox state changes */
  useEffect(() => {
    check
      ? setMedia((prev) => (prev = "anime"))
      : setMedia((prev) => (prev = "manga"));
  }, [check]);

  /* function that toggles checkbox */
  const handleCheckbox = () => {
    setCheck((prev) => !prev);
  };

  return {
    media,
    handleCheckbox,
  };
};
