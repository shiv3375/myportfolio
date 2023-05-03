import React from "react";

const LinkedInIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      x="0"
      y="0"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="#a8b2d1"
          className="hover:fill-green"
          d="M86 17.2c-37.995 0-68.8 30.805-68.8 68.8s30.805 68.8 68.8 68.8 68.8-30.805 68.8-68.8S123.995 17.2 86 17.2zM60.177 48.177c4.828 0 8.044 3.217 8.044 7.505 0 4.289-3.216 7.505-8.577 7.505-4.828.006-8.044-3.216-8.044-7.505 0-4.288 3.216-7.505 8.577-7.505zm8.623 66.49H51.6V68.8h17.2zm57.333 0h-16.19V89.6c0-6.932-4.318-8.532-5.935-8.532-1.616 0-7.017 1.067-7.017 8.532v25.066H80.267V68.8h16.73v6.398c2.155-3.732 6.472-6.398 14.568-6.398 8.095 0 14.568 6.398 14.568 20.8z"
        ></path>
      </g>
    </svg>
  );
};

export default React.memo(LinkedInIcon);