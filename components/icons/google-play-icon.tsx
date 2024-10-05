import type { ComponentProps } from "react";

const GooglePlayIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.1 1.12095C0.1 0.767969 0.204665 0.505739 0.3718 0.336489L8.85649 7.95352V8.04609L0.371801 15.6631C0.204665 15.4939 0.1 15.2316 0.1 14.8787V1.12095Z"
        fill="#121212"
        stroke="white"
        strokeWidth="0.2"
      />
      <mask id="mask0_350_16150" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="8" y="5" width="8" height="6">
        <path
          d="M11.8177 10.6606L8.95703 8.09065V7.90885L11.8191 5.33948L15.2741 7.10137C16.2422 7.5957 16.2422 8.4038 15.2741 8.89751L11.8836 10.627L11.8177 10.6606Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_350_16150)">
        <path
          d="M15.2286 8.80842L15.2286 8.80843L11.8381 10.5379L11.8381 10.538L11.8334 10.5403L9.05703 8.04606V7.95346L11.8348 5.45975L15.2286 7.19043C15.2286 7.19044 15.2286 7.19045 15.2286 7.19046C15.6975 7.42987 15.9002 7.72859 15.9002 7.99967C15.9002 8.27074 15.6975 8.56932 15.2286 8.80842Z"
          fill="#121212"
          stroke="white"
          strokeWidth="0.2"
        />
      </g>
      <mask id="mask1_350_16150" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="8" width="12" height="8">
        <path
          d="M11.883 10.6273L8.95641 8L0.320312 15.753C0.640014 16.0562 1.16707 16.0935 1.7607 15.7909L11.883 10.6273Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_350_16150)">
        <path
          d="M0.473693 15.7496L8.95641 8.13438L11.7078 10.6044L1.71529 15.7018C1.19743 15.9658 0.75814 15.9499 0.473693 15.7496Z"
          fill="#121212"
          stroke="white"
          strokeWidth="0.2"
        />
      </g>
      <mask id="mask2_350_16150" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="8">
        <path
          d="M11.883 5.37271L1.7607 0.20905C1.16707 -0.0935222 0.640014 -0.0561676 0.320312 0.247028L8.95641 7.99998L11.883 5.37271Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_350_16150)">
        <path
          d="M1.71526 0.298129C1.71527 0.298134 1.71528 0.29814 1.71529 0.298145L11.7078 5.3956L8.95641 7.8656L0.473693 0.250338C0.758134 0.0500502 1.19741 0.0341928 1.71526 0.298129Z"
          fill="#121212"
          stroke="white"
          strokeWidth="0.2"
        />
      </g>
    </svg>
  );
};

export default GooglePlayIcon;
