import React from "react";

function IconTextList({ width = 14, height = 14 }) {
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
        d="M7 8.233h0-2v0h-.006l-.078.005h0-.006A.767.767 0 005 9.768h2v0h.006l.078-.005h.006A.767.767 0 007 8.232zM13.767 7A6.767 6.767 0 10.233 7v5.333a1.433 1.433 0 001.434 1.434H7A6.766 6.766 0 0013.767 7zM3.299 3.3A5.233 5.233 0 117 12.232H1.767V7c0-1.388.551-2.72 1.532-3.7zM9.542 5.79A.767.767 0 009 5.567H5A.767.767 0 105 7.1h4a.767.767 0 00.542-1.309z"
      ></path>
    </svg>
  );
}

export default IconTextList;
