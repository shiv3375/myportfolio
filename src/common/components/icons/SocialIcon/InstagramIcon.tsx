import React from "react";

const InstagramIcon = () => {
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
          d="M57.333 21.5C37.575 21.5 21.5 37.575 21.5 57.333v57.334c0 19.758 16.075 35.833 35.833 35.833h57.334c19.758 0 35.833-16.075 35.833-35.833V57.333c0-19.758-16.075-35.833-35.833-35.833zm0 14.333h57.334c11.853 0 21.5 9.647 21.5 21.5v57.334c0 11.853-9.647 21.5-21.5 21.5H57.333c-11.853 0-21.5-9.647-21.5-21.5V57.333c0-11.853 9.647-21.5 21.5-21.5zm64.5 7.167a7.167 7.167 0 100 14.333 7.167 7.167 0 000-14.333zM86 50.167c-19.759 0-35.833 16.075-35.833 35.833 0 19.759 16.075 35.833 35.833 35.833 19.759 0 35.833-16.075 35.833-35.833 0-19.759-16.075-35.833-35.833-35.833zM86 64.5c11.854 0 21.5 9.646 21.5 21.5s-9.646 21.5-21.5 21.5S64.5 97.854 64.5 86 74.146 64.5 86 64.5z"
        ></path>
      </g>
    </svg>
  );
};

export default React.memo(InstagramIcon);