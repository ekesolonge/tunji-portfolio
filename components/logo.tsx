import type { ComponentProps } from "react";

const Logo = (props: ComponentProps<"svg">) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M26.9987 3.66671C26.9987 5.50766 25.5063 7.00004 23.6654 7.00004C21.8244 7.00004 20.332 5.50766 20.332 3.66671C20.332 1.82576 21.8244 0.333374 23.6654 0.333374C25.5063 0.333374 26.9987 1.82576 26.9987 3.66671Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.66536 17H0.332031V10.3334H33.6654V17H10.332V33.6667H3.66536V17Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.332 33.6667V20.3334H26.9987V33.6667H20.332Z" />
    </svg>
  );
};

export default Logo;
