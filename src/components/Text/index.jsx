import React from "react";

const sizeClasses = {
  txtInterBold50: "font-bold font-inter",
  txtOutfitSemiBold24: "font-outfit font-semibold",
  txtOutfitBold60: "font-bold font-outfit",
  txtInterBold20: "font-bold font-inter",
  txtOutfitBold20: "font-bold font-outfit",
  txtOutfitBold90Black900: "font-bold font-outfit",
  txtOutfitRegular30: "font-normal font-outfit",
  txtOutfitBold24: "font-bold font-outfit",
  txtOutfitRegular18: "font-normal font-outfit",
  txtOutfitBold90: "font-bold font-outfit",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
