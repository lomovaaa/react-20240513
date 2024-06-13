import { MutableRefObject, useEffect } from "react";
import { Nullable } from "../types";

export const useClickOutside = (
  ref: MutableRefObject<Nullable<HTMLDivElement>>,
  callback?: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
