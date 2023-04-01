import React from "react";

function IconClock({ width = 14, height = 14 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.2"
        d="M7 2.9h0a.767.767 0 00-.767.767V7h0v.007l.007.087h0V7.1a.767.767 0 00.218.442h0l2 2h0l.004.004.063.056h0l.005.004a.767.767 0 001.012-1.148h0L7.767 6.683V3.667h0V3.66l-.005-.078h0v-.006A.767.767 0 007 2.9zM13.767 7A6.767 6.767 0 10.234 7a6.767 6.767 0 0013.533 0zM3.299 3.3a5.233 5.233 0 117.401 7.4 5.233 5.233 0 01-7.4-7.4z"
      ></path>
    </svg>
  );
}

export default IconClock;
