import { FC, useEffect, useRef } from "react";
import { Nullable } from "../../types";

export const ProgressBar: FC = () => {
  const progressBarRef = useRef<Nullable<HTMLDivElement>>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressBarRef.current) {
        return;
      }

      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      progressBarRef.current.style.width = `${(scrollTop / height) * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={progressBarRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "20px",
        background: "gold",
      }}
    />
  );
};
