import React, { useEffect } from "react";

export function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback?: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback?.();
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}
