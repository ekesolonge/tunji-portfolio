import type { ComponentProps } from "react";

const RightArrowIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg width="65" height="46" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 23H56.5M56.5 23C40.2836 18.3339 34.8569 13.8275 34.5 1M56.5 23C41.9577 26.7872 37.6823 32.1136 34.5 45"
        stroke="currentcolor"
        strokeWidth="4"
      />
    </svg>
  );
};

export default RightArrowIcon;
