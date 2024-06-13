import { FC, PropsWithChildren, useRef } from "react";
import { createPortal } from "react-dom";
import { Nullable } from "../../types";
import { useClickOutside } from "../../hooks/use-click-outside";

type ModalProps = PropsWithChildren<{
  onClose?: () => void;
}>;

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal");
  const modalContentRef = useRef<Nullable<HTMLDivElement>>(null);

  useClickOutside(modalContentRef, onClose);

  if (!modalRoot) {
    console.error("Modal root not found");

    return null;
  }

  return createPortal(
    <div
      style={{
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        ref={modalContentRef}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          background: "white",
          width: "300px",
          height: "200px",
        }}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};
