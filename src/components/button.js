import React from "react";

export const Button = ({ children, variant = "default", className = "", ...props }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    default: "bg-white text-black hover:bg-gray-200",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
