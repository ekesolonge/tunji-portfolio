import * as motion from "framer-motion/client";
import type { ComponentProps } from "react";

type Props = { isOpen: boolean } & ComponentProps<"svg">;

const MenuIcon = ({ isOpen, ...props }: Props) => {
  return (
    <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <motion.path
        initial={{ d: "M1 1H33" }}
        animate={{ d: isOpen ? "M9 1H25" : "M1 1H33" }}
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      />
      <path d="M1 9H33" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default MenuIcon;
