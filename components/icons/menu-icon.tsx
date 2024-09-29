import type { ComponentProps } from "react";

const MenuIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1H33" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 9H33" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default MenuIcon;
